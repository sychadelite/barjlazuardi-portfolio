import LocomotiveScroll from 'locomotive-scroll'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      LocomotiveScroll: () => new LocomotiveScroll()
    }
  }
})