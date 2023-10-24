<template>
  <div>
    <Navbar />
    <slot />
    <UtilityFlashlight v-if="flashlight"/>
  </div>
</template>

<script>
import { useIndexStore } from '../store/index'

export default {
  data() {
    return {
      store: {
        index: useIndexStore()
      },
      flashlight: false,
      lenis: null,
      innerWidth: 0,
      innerHeight: 0,
    }
  },
  beforeMount() {
    this.store.index.setRootLayout('default_layout', this)
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.initGsap()
        this.lenis.scrollTo('top')
      }, 300)
      this.handleResize()
      window.addEventListener('resize', this.handleResize)
    })
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    initGsap() {
      const { $Lenis, $gsap, $ScrollTrigger } = useNuxtApp()

      // Scroll smooth
      this.lenis = $Lenis()

      this.lenis.on('scroll', (e) => {
        $ScrollTrigger.update()
      })

      this.lenis.isSmooth = true

      // Gsap integration with lenis
      $gsap.ticker.add((time) => {
        this.lenis.raf(time * 1000)
      })
      $gsap.ticker.lagSmoothing(0)
    },
    handleResize() {
      this.innerWidth = window.innerWidth
      this.innerHeight = window.innerHeight
    },
    scrollerStatus(status) {
      if (!status) {
        this.lenis.stop()
      } else {
        this.lenis.start()
      }
    }
  }
}
</script>