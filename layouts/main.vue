<template>
  <div class="layout">
    <!-- Loader -->
    <InterfacePageLoadCounter v-if="!isCompleteLoaded" @callback="onLoaderState"/>
    <!-- Loader -->
    <Navbar />

    <main class="page-content">
      <slot />
    </main>

    <Footer />
    <UtilityFlashlight v-if="flashlight" />
    <UtilityButtonDownloadCV />
    <UtilityButtonToggleFlashlight :is-on="flashlight" @callback="onToggleLight" />
  </div>
</template>

<script>
import { useIndexStore } from '@/store/index'

export default {
  data() {
    return {
      store: {
        index: useIndexStore()
      },
      flashlight: localStorage.getItem('flashlight') === 'true',
      lenis: null,
      pageSize: {
        innerWidth: 0,
        innerHeight: 0,
        screenWidth: 0,
        screenHeight: 0
      },
      isPageRendered: false,
      isCompleteLoaded: false
    }
  },
  beforeMount() {
    this.store.index.setRootLayout('main_layout', this)
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.initGsap()
        // this.lenis.scrollTo('top')
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

      this.lenis.on('scroll', () => {
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
      this.pageSize.innerWidth = window.innerWidth
      this.pageSize.innerHeight = window.innerHeight
      this.pageSize.screenWidth = window.screen.width
      this.pageSize.screenHeight = window.screen.height
    },
    scrollerStatus(status) {
      if (!status) {
        this.lenis.stop()
      } else {
        this.lenis.start()
      }
    },
    onToggleLight() {
      this.flashlight = !this.flashlight
      localStorage.setItem('flashlight', this.flashlight)
    },
    onLoaderState(e) {
      this.isPageRendered = e.isPageRendered
      this.isCompleteLoaded = e.isCompleteLoaded
    }
  }
}
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* full screen height */
}
.page-content {
  flex: 1; /* push footer down */
}
</style>