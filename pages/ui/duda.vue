<template>
  <div>

  </div>
</template>

<script>
export default {
  mounted() {
    this.initGsap()
  },
  methods: {
    initGsap() {
      const { $Lenis, $gsap, $ScrollTrigger } = useNuxtApp()

      // Scroll smooth
      const lenis = $Lenis()

      lenis.on('scroll', (e) => {
        $ScrollTrigger.update
      })

      // Gsap integration with lenis
      $gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
      })
      $gsap.ticker.lagSmoothing(0)

      // Gsap logic
      
    }
  }
}
</script>

<style lang="scss" scoped>

</style>