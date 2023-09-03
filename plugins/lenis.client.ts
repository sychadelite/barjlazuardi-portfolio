import Lenis from '@studio-freight/lenis'

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      Lenis: () => new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        gestureOrientation: 'both',
        smoothWheel: true,
        smoothTouch: true,
      })
    },
  }
})