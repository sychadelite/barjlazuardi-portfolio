<template>
  <div>
    <h1 ref="counter" class="counter font-frigate">{{ counter }}</h1>
    <div class="overlay">
      <div v-for="row in 10" :key="row" class="bar"></div>
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
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initCounter()
      this.initGsap()
    })
  },
  methods: {
    initGsap() {
      const { $gsap } = useNuxtApp()

      $gsap.to('.counter', 0.25, {
        delay: 3.5,
        opacity: 0,
        onComplete: () => {
          this.$emit('callback', { isLoaded: true, isCompleteLoaded: false })
        }
      })

      $gsap.to('.bar', 1.5, {
        delay: 3.5,
        height: 0,
        stagger: {
          amount: 0.5
        },
        ease: 'power4.inOut',
        onComplete: () => {
          this.$emit('callback', { isLoaded: true, isCompleteLoaded: true })
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

      let delay = Math.floor(Math.random() * 200) + 50
      setTimeout(this.initCounter, delay)
    }
  }
}
</script>

<style lang="scss" scoped>
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
</style>