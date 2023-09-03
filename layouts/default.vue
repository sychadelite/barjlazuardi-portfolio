<template>
  <div>
    <slot />
    <!-- <UtilityFlashlight/> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      lenis: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.initGsap()
      }, 300)
    })
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

      // Gsap logic
      const horizontalSections = $gsap.utils.toArray('section.horizontal')
      horizontalSections.forEach(function (sec, i) {
        const thisPinWrap = sec.querySelectorAll('.pin-wrap')
        thisPinWrap.forEach(pinWrap => {
          const thisAnimWrap = pinWrap.querySelectorAll('.animation-wrap')
          thisAnimWrap.forEach(animWrap => {
            if (animWrap) {
              var getToValue = () => -(animWrap.scrollWidth - window.innerWidth)
              
              $gsap.fromTo(animWrap, {
                x: () => animWrap.classList.contains('to-right') ? 0 : getToValue()
              }, {
                x: () => animWrap.classList.contains('to-right') ? getToValue() : 0,
                ease: "none",
                scrollTrigger: {
                  trigger: sec,
                  start: "top top",
                  end: () => "+=" + (animWrap.scrollWidth - window.innerWidth),
                  pin: thisPinWrap,
                  invalidateOnRefresh: true,
                  // anticipatePin: 1,
                  scrub: true,
                  // markers: true,
                }
              })
            }
          })
        })
      })
    }
  }
}
</script>