<template>
  <div>
    <section class="relative xl:container xl:m-auto w-full min-h-[200vh]">
      <div class="grid grid-cols-12 border-x border-x-black lg:divide-x divide-black border-black">
        <div class="col-span-1 max-lg:hidden py-6"></div>
        <div class="col-span-8 max-lg:col-span-12 text-lg xs:text-5xl font-dune-rise font-extrabold capitalize">
          <div class="flex flex-wrap sm:flex-row divide-x divide-black">
            <div class="w-full sm:w-[75%] lg:w-9/12 sm:border-b border-black divide-y divide-black">
              <div class="px-1 md:px-4 py-10 lg:py-12">
                <h1 class="line-clamp-1">minimalistic</h1>
              </div>
              <div class="px-1 md:px-4 py-10 lg:py-12">
                <h1 class="line-clamp-1">& creative</h1>
              </div>
              <div class="px-1 md:px-4 py-10 lg:py-12">
                <h1 class="line-clamp-1">websites</h1>
              </div>
            </div>
            <div class="w-full sm:w-[25%] lg:w-3/12 border-b border-black divide-y divide-black">
              <div class="px-4 py-6 lg:py-12">
                <div class="flex flex-col-reverse sm:flex-col gap-8 sm:gap-2 justify-between w-full text-base sm:text-sm font-space-mono font-normal uppercase" :style="store.index.getLayout.default_layout.innerWidth >= 640 ? 'writing-mode: vertical-rl;' : ''">
                  <div class="flex flex-row justify-between items-center gap-4">
                    <p class="text-start sm:h-64">
                      my websites embody a minimalistic and creative design, solve business issues, and are user-friendly.
                    </p>
                    <div class="bg-black w-16 h-16 max-sm:hidden"></div>
                  </div>
                  <div class="flex flex-wrap sm:flex-row justify-between items-center gap-6 sm:gap-4">
                    <div class="w-full sm:h-48 p-2 border border-black rounded-2xl"></div>
                    <div class="flex flex-row justify-between items-center gap-12 sm:gap-6">
                      <div v-for="row in 4" :key="row" class="w-1.5 h-1.5 rounded-full" :class="row % 2 == 0 ? 'bg-black' : 'bg-gray-500'"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-row divide-x divide-black">
            <div class="w-full border-b border-black divide-y divide-black">
              <div class="px-1 md:px-4 py-10 lg:py-12">
                <div class="flex flex-col lg:flex-row justify-evenly gap-x-4 gap-y-8 max-lg:text-start uppercase"> 
                  <NuxtLink to="/"><p class="text-2xl sm:text-4xl lg:text-xl max-lg:font-bolder font-asgard-fat tracking-widest">sych.experts &gt;&gt;</p></NuxtLink>
                  <NuxtLink to="/"><p class="text-2xl sm:text-4xl lg:text-xl max-lg:font-bolder font-asgard-fat tracking-widest">behance &gt;&gt;</p></NuxtLink>
                  <NuxtLink to="/"><p class="text-2xl sm:text-4xl lg:text-xl max-lg:font-bolder font-asgard-fat tracking-widest">whatsapp &gt;&gt;</p></NuxtLink>
                  <NuxtLink to="/"><p class="text-2xl sm:text-4xl lg:text-xl max-lg:font-bolder font-asgard-fat tracking-widest">telegram &gt;&gt;</p></NuxtLink>
                </div>
                <div class="w-full h-12"></div>
                <div class="flex flex-col lg:flex-row justify-evenly gap-x-4 gap-y-8 max-lg:hidden"> 
                  <p class="h-11 text-7xl font-libre-barcode font-normal">nice to see you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-2 max-lg:col-span-9 text-sm font-space-mono font-normal uppercase border-b border-black divide-y divide-black">
          <div class="w-full">
            <div class="flex flex-col">
              <img src="/img/icons/barj-illuminate.svg" alt="barj" class="h-[7.5rem]">
              <h1 class="text-7xl font-jugendstil-ornamente mb-10">B</h1>
              <div class="flex flex-row justify-center items-center">
                <h1 class="h-52 text-7xl font-genjiro tracking-[.2em] -scale-100" style="writing-mode: vertical-rl;">()^&%</h1>
                <h1 class="h-52 text-6xl font-genjiro tracking-wide -scale-100" style="writing-mode: vertical-rl;">&rarr;&rarr;&rarr;</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-1 max-lg:hidden py-6"></div>
      </div>
    </section>
  </div>
</template>

<script>
import { useIndexStore } from '../store/index'

export default {
  setup() {
    definePageMeta({
      layout: 'main'
    })

    useHead({
      title: 'Barjlazuardi | Portfolio',
      meta: [
        { name: 'description', content: 'My amazing portfolio site.' }
      ],
      bodyAttrs: {
        class: 'index-page'
      }
    })
  },
  data() {
    return {
      store: {
        index: useIndexStore()
      },
    }
  },
  beforeMount() {
    this.store.index.setRootPage('index_page', this)
  },
  mounted() {
    this.$nextTick(() => {
      this.initGsap()
    })
  },
  methods: {
    initGsap() {
      const { $Lenis, $LocomotiveScroll, $gsap, $ScrollTrigger } = useNuxtApp()
      
      // Gsap logic
    }
  }
}
</script>

<style lang="scss">
</style>