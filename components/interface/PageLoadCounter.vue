<template>
  <div id="page-load-counter">
    <div ref="content" class="content">
      <h1 class="message font-frigate">{{ isPageRendered ? 'Please Wait ...' : 'Welcome' }}</h1>
      <h1 class="message font-frigate">{{ isPageRendered ? '' : 'to my website' }}</h1>
    </div>
    <h1 ref="counter" class="counter font-frigate" :class="{ 'opacity-0': isPageRendered }">{{ counter }}</h1>
    <div class="overlay">
      <div v-for="row in 10" :key="row" class="bar"/>
    </div>
  </div>
</template>

<script>
import { useIndexStore } from '~/store'

export default {
  emits: [
    'callback'
  ],
  data() {
    return {
      store: {
        index: useIndexStore()
      },
      counter: 0,
      splitter: {
        textMessage: undefined
      }
    }
  },
  computed: {
    isPageRendered() {
      return this.store.index.getLayout.main_layout.isPageRendered
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (!this.isPageRendered) this.initCounter()
      this.initGsap()
    })
  },
  methods: {
    initGsap() {
      const { $gsap, $SplitType } = useNuxtApp()

      this.splitter.textMessage = new $SplitType('.message')

      if (this.isPageRendered) {
        const children = this.$refs.content.children
        for (let i = 0; i < children.length; i++) {
          const chars = children[i].querySelectorAll('.char')
          chars.forEach(char => {
            char.style.transform = 'translateY(0px)'
          })
        }
      } else {
        $gsap.to('.message .char', {
          y: 0,
          stagger: 0.05,
          delay: 0,
          duration: 0.2
        })
      }

      $gsap.to('.content', 0.25, {
        delay: 3.5,
        opacity: 0
      })

      $gsap.to('.counter', 0.25, {
        delay: this.isPageRendered ? 0 : 3.5,
        opacity: 0,
        onComplete: () => {
          this.$emit('callback', { isPageRendered: true, isCompleteLoaded: false })
        }
      })

      $gsap.to('.bar', 1.5, {
        delay: this.isPageRendered ? 0.5 : 3.5,
        height: 0,
        stagger: {
          amount: 0.5
        },
        ease: 'power4.inOut',
        onComplete: () => {
          this.$emit('callback', { isPageRendered: true, isCompleteLoaded: true })
        },
        onStart: () => {
          $gsap.to('.message .char', {
            y: -125,
            stagger: 0.05,
            delay: 0,
            duration: 0.2
          })
        }
      })
    },
    initCounter() {
      if (this.counter == 100) {
        return
      }

      this.counter += Math.floor(Math.random() * 10) + 1

      if (this.counter > 100) {
        this.counter = 100
      }

      const delay = Math.floor(Math.random() * 200) + 50
      setTimeout(this.initCounter, delay)
    }
  }
}
</script>

<style lang="scss">
#page-load-counter {
  .content {
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center ;
    z-index: 100;
    color: #bcbcc4;
    padding: 0.2em 0.4em;
    font-size: 4vw;
    pointer-events: auto;
    
    .message {
      font-kerning: none;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    
      .char {
        transform: translateY(-125px);
        transition: transform .5s;
        vertical-align: -webkit-baseline-middle;
      }
    }
  }
  
  .counter {
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    z-index: 100;
    color: #bcbcc4;
    padding: 0.2em 0.4em;
    font-size: 10vw;
    pointer-events: none;
  }
  
  .overlay {
    position: fixed;
    display: flex;
    width: 100vw;
    height: 100vh;
    z-index: 99;
  
    .bar {
      width: 10vw;
      height: 105vh;
      background: theme('colors.black');
    }
  }
}
</style>