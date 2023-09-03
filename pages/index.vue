<template>
  <div>
    <div class="relative flex flex-col justify-center items-center gap-2">
      <section class="relative sm:container m-auto w-full h-fit min-h-[50vh] sm:min-h-[80vh]">
        <h3 class="text-xl sm:text-2xl font-semibold">Under development</h3>
        <div class="flex flex-col md:flex-row items-center justify-evenly w-full h-full gap-2">
          <div class="w-full h-fit md:w-1/2">
            <h1 class="text-4xl sm:text-7xl font-extrabold mb-3">Barj Lazuardi</h1>
            <UtilityTypedText 
              :id="1" 
              :class="'justify-center min-h-[32px] sm:min-h-[48px] !p-0'"
              :options="[
                `<h2 class='text-2xl sm:text-5xl font-bold'>Website</h2>`,
                `<h2 class='text-2xl sm:text-5xl font-bold'>Portfolio</h2>`,
                `<h2 class='text-2xl sm:text-5xl font-bold'>Creation</h2>`,
                `<h2 class='text-2xl sm:text-5xl font-bold'>Art</h2>`,
                `<h2 class='text-2xl sm:text-5xl font-bold'>Masterpiece</h2>`,
              ]"
            />
            <h2 class="text-2xl sm:text-5xl font-bold">Portal</h2>
          </div>
          <div class="w-full h-fit sm:h-72 md:w-1/2 md:h-[500px] xl:w-[700px] xl:h-[600px]" >
            <template v-if="innerWidth >= 640 || $isDesktop()">
              <ThreejsLittlestTokyo 
                :class="'w-full h-full'"
                :isZoom="false"
                :isAutoRotate="true"
                :isAutoRotateSpeed="-3.0"
              />
            </template>
            <template v-else>
              <Skills />
            </template>
          </div>
        </div>
      </section>

      <section class="relative horizontal w-full bg-[#111] text-[#b9b3a9]">
        <div class="pin-wrap">
          <div class="animation-wrap to-right place-items-center">
            <h2 class="item text-4xl font-termina font-bold">
              Explore my works.
            </h2>
            <img class="item w-auto object-cover" src="https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900" alt="">
            <img class="item w-auto object-cover" src="https://images.pexels.com/photos/3371358/pexels-photo-3371358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900" alt="">
            <img class="item w-auto object-cover" src="https://images.pexels.com/photos/3618545/pexels-photo-3618545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900" alt="">
          </div>
        </div>
      </section>

      <section class="relative m-auto w-full">
        <div class="flex flex-wrap-reverse justify-evenly items-center">
          <Skills />
          <img src="@/assets/img/profile/1637566473719.png" alt="" width="500">
        </div>
      </section>

      <section class="relative container m-auto w-full">
        <h2 class="credit font-termina">
          <a href="#" target="_blank" class="text-[#111] text-sm">
            This Masterpiece Brought to You by 
            <br>
            <small>Mohammad Barj Lazuardi Dindashwara</small>
          </a>
        </h2>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    useHead({
      title: 'Barjlazuardi | Portfolio',
      meta: [
        { name: 'description', content: 'My amazing portfolio site.' }
      ],
      bodyAttrs: {
        class: 'index-page'
      },
      script: [{ innerHTML: 'console.warn(\'What da fak r u doin here ?\')' }]
    })
  },
  data() {
    return {
      innerWidth: 0,
      innerHeight: 0,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initGsap()
      this.handleResize()
      window.addEventListener('resize', this.handleResize)
    })
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    initGsap() {
      const { $Lenis, $LocomotiveScroll, $gsap, $ScrollTrigger } = useNuxtApp()

      // Gsap logic
    },
    handleResize() {
      this.innerWidth = window.innerWidth
      this.innerHeight = window.innerHeight
    }
  }
}
</script>

<style lang="scss">
body {
  &.index-page {
    font-family: termina, sans-serif;
    color: #111;
    background: #b9b3a9;
    transition: 0.3s ease-out;
    overflow-x: hidden;
    max-width: 100%;
    width: 100%;
    overscroll-behavior: none;

    .item {
      flex: 0 0 50rem;
      padding: 150px 80px;
    }
  }
}
</style>