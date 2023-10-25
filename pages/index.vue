<template>
  <div class="min-h-screen">
    <section class="relative xl:container xl:m-auto w-full">
      <div class="grid grid-cols-12 border-x border-x-black lg:divide-x divide-black border-black">
        <div class="col-span-1 max-lg:hidden py-6"></div>
        <div class="col-span-8 max-lg:col-span-12 text-lg xs:text-3xl sm:text-5xl font-dune-rise font-extrabold capitalize">
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
                <div class="flex flex-col-reverse sm:flex-col gap-8 sm:gap-2 justify-between w-full text-base sm:text-sm font-space-mono font-normal uppercase" :style="store.index.getLayout.main_layout.innerWidth >= 640 ? 'writing-mode: vertical-rl;' : ''">
                  <div class="flex flex-wrap lg:flex-row justify-between items-center gap-4">
                    <p class="text-start sm:h-64">
                      my websites embody a minimalistic and creative design, solve business issues, and are user-friendly.
                    </p>
                    <div class="m-auto" style="writing-mode: horizontal-tb;">
                      <img src="/img/icons/sych-base.png" alt="sych" class="h-16 grayscale invert">
                      <small>{{ store.index.getLayout.main_layout.innerWidth }}</small>
                    </div>
                  </div>
                  <div class="flex flex-wrap sm:flex-row justify-between items-center gap-6 sm:gap-4">
                    <div class="w-full sm:h-48 p-2 border border-black rounded-2xl"></div>
                    <div class="flex flex-row justify-between items-center gap-4 xs:gap-12 sm:gap-6">
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
                <div class="flex flex-wrap justify-around gap-2 lg:hidden">
                  <img src="/img/icons/nazi.svg" alt="nazi" class="h-24 grayscale mx-6 my-auto">
                  <div class="flex flex-col justify-center items-center font-normal mt-3">
                    <h1 class="text-5xl font-jugendstil-ornamente tracking-widest">Ba</h1>
                    <h1 class="text-6xl font-genjiro tracking-[.2em]">()^&%</h1>
                    <h1 class="text-5xl font-genjiro tracking-wide">&rarr;&rarr;&rarr;</h1>
                  </div>
                  <img src="/img/icons/barj-illuminate.png" alt="barj" class="h-24 my-auto">   
                </div>
                <div class="w-full h-12 lg:hidden"></div>
                <div class="flex flex-wrap lg:flex-col justify-around lg:justify-evenly gap-y-4">
                  <div class="flex flex-col lg:flex-row justify-around gap-x-4 gap-y-8 max-lg:text-start uppercase"> 
                    <NuxtLink to="/" class="w-fit h-fit text-lg xs:text-2xl sm:text-4xl lg:text-xl max-lg:font-bolder font-asgard-fat tracking-widest hover:tracking-tight transition-all ease-in-out duration-200">sych.experts &gt;&gt;</NuxtLink>
                    <NuxtLink to="/" class="w-fit h-fit text-lg xs:text-2xl sm:text-4xl lg:text-xl max-lg:font-bolder font-asgard-fat tracking-widest hover:tracking-tight transition-all ease-in-out duration-200">behance &gt;&gt;</NuxtLink>
                    <NuxtLink to="/" class="w-fit h-fit text-lg xs:text-2xl sm:text-4xl lg:text-xl max-lg:font-bolder font-asgard-fat tracking-widest hover:tracking-tight transition-all ease-in-out duration-200">whatsapp &gt;&gt;</NuxtLink>
                    <NuxtLink to="/" class="w-fit h-fit text-lg xs:text-2xl sm:text-4xl lg:text-xl max-lg:font-bolder font-asgard-fat tracking-widest hover:tracking-tight transition-all ease-in-out duration-200">telegram &gt;&gt;</NuxtLink>
                  </div>
                  <div class="max-xs:hidden h-fit my-auto" :style="`${store.index.getLayout.main_layout.innerWidth >= 1024  ? 'writing-mode: horizontal-tb;' : 'writing-mode: vertical-rl;'}`">
                    <p class="lg:h-11 text-6xl xs:text-7xl font-libre-barcode font-normal">{{ store.index.getLayout.main_layout.innerWidth >= 1024 ? 'nice&nbsp;to&nbsp;meet&nbsp;you' : 'thank&nbsp;you' }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-2 max-lg:hidden text-sm font-space-mono font-normal uppercase border-b border-black divide-y divide-black">
          <div class="px-4 py-6 lg:py-12 w-full h-full">
            <div class="flex flex-col justify-between items-center h-full">
              <img src="/img/icons/barj-illuminate.png" alt="barj" class="h-24 -mt-3.5">
              <h1 class="text-7xl font-jugendstil-ornamente">B</h1>
              <div class="flex flex-row justify-center items-center">
                <h1 class="h-52 text-7xl font-genjiro tracking-[.2em] -scale-100" style="writing-mode: vertical-rl;">()^&%</h1>
                <h1 class="h-52 text-6xl font-genjiro tracking-wide -scale-100" style="writing-mode: vertical-rl;">&rarr;&rarr;&rarr;</h1>
              </div>
              <img src="/img/icons/nazi.svg" alt="nazi" class="h-24 grayscale">
            </div>
          </div>
        </div>
        <div class="col-span-1 max-lg:hidden py-6"></div>
      </div>
    </section>

    <section class="relative xl:container xl:m-auto w-full">
      <div class="grid grid-cols-12 border-x border-x-black lg:divide-x divide-black border-black">
        <div class="col-span-1 order-4 lg:order-1 max-lg:hidden py-6"></div>
        <div class="col-span-5 order-3 lg:order-2 max-lg:col-span-12 text-lg xs:text-3xl sm:text-5xl text-start font-space-mono font-normal capitalize border-b border-black">
          <div class="px-4 lg:px-8 py-6 lg:py-12">
            <h2 class="text-2xl xs:text-4xl xl:text-5xl uppercase font-bold tracking-widest">hello;)<br>my name is barj</h2>
            <p class="text-lg uppercase mt-5">
              I'm a web developer who loves tinkering with technology.
              <br>
              <br>
              I have experience in full-stack development, creating user-friendly websites
              <br>
              <br>
              my sites embody a clean and minimalistic design, solve business issues, and are user-friendly.
              <br>
              i have 3 years of experience in web development in one of the best start-up companies or government in tangerang and jakarta.
              among my projects are websites for indonesia, united states, and colombia.
            </p>
            <button class="text-lg uppercase font-extrabold py-4 hover:tracking-widest transition-all ease-in-out duration-200">
              contact with me
              <i class="fa-solid fa-arrow-trend-up"></i>
            </button>
          </div>
        </div>
        <div class="col-span-5 order-2 lg:order-3 max-lg:col-span-12 text-lg xs:text-3xl sm:text-5xl text-start font-middle-earth font-normal capitalize border-b border-black">
          <div class="w-full h-full min-h-[20rem] bg-center bg-cover bg-no-repeat" style="background-image: url('/img/profile/1637566473719-grayscale.jpeg');"></div>
        </div>
        <div class="col-span-1 order-1 lg:order-4 max-lg:hidden py-6"></div>
      </div>
    </section>

    <section class="relative xl:container xl:m-auto w-full">
      <div class="grid grid-cols-12 border-x border-x-black lg:divide-x divide-black border-black">
        <div class="col-span-1 max-lg:hidden py-6"></div>
        <div class="col-span-10 max-lg:col-span-12 text-lg xs:text-3xl sm:text-5xl text-start font-space-mono font-normal capitalize border-b border-black">
          <div class="px-4 lg:px-8 py-6 lg:py-12">
            <div class="flex flex-wrap justify-between items-end gap-2 w-full h-fit">
              <h2 class="text-2xl xs:text-4xl xl:text-5xl uppercase font-bold tracking-widest">my portfolio</h2>
              <div class="flex flex-row items-start gap-4 h-20 sm:h-28">
                <div class="flex flex-col justify-between h-full">
                  <p class="text-lg font-bold tracking-tighter">projects</p>
                  <i class="fa-solid fa-timeline"></i>
                </div>
                <div class="flex flex-col justify-between h-full">
                  <i class="fa-brands fa-linode"></i>
                  <i class="fa-regular fa-life-ring"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-1 max-lg:hidden py-6"></div>
      </div>
    </section>

    <section class="relative xl:container xl:m-auto w-full">
      <template v-for="row in Math.round(projects.length / 2)" :key="row">
        <div class="grid grid-cols-12 border-x border-x-black lg:divide-x divide-black border-black">
          <div class="col-span-1 max-lg:hidden py-6"></div>
          <div class="col-span-5 max-lg:col-span-12 text-lg xs:text-3xl sm:text-5xl text-start font-space-mono font-normal capitalize border-b border-black">
            <div class="px-4 lg:px-8 py-6 lg:py-12 h-full">
              <template v-if="projects[row+(row-2)]?.id">
                <div class="flex flex-col justify-between gap-2 w-full h-full">
                  <div>
                    <div class="flex flex-wrap gap-2 justify-between mb-5">
                      <h4 class="text-2xl font-bold">{{ projects[row+(row-2)]?.name }}</h4>
                      <p class="inline-flex items-center text-sm">{{ projects[row+(row-2)]?.country }}</p>
                    </div>
                    <p class="text-lg font-normal">
                      {{ projects[row+(row-2)]?.description }}
                    </p>
                  </div>
                  <div class="flex flex-wrap justify-between">
                    <p><small class="text-xs">{{ $timeAgo(projects[row+(row-2)]?.date) }}</small></p>
                    <NuxtLink :to="projects[row+(row-2)]?.url" target="_blank">
                      <button class="px-4 text-lg font-bold hover:tracking-widest transition-all ease-in-out duration-200">learn more&nbsp;<i class="fa-solid fa-arrow-right-long -rotate-45"></i></button>
                    </NuxtLink>
                  </div>
                </div>
              </template>
            </div>
          </div>
          <div class="col-span-5 max-lg:col-span-12 text-lg xs:text-3xl sm:text-5xl text-start font-space-mono font-normal capitalize border-b border-black">
            <div class="px-4 lg:px-8 py-6 lg:py-12 h-full">
              <template v-if="projects[row+(row-1)]?.id">
                <div class="flex flex-col justify-between gap-2 w-full h-full">
                  <div>
                    <div class="flex flex-wrap gap-2 justify-between mb-5">
                      <h4 class="text-2xl font-bold">{{ projects[row+(row-1)]?.name }}</h4>
                      <p class="inline-flex items-center text-sm">{{ projects[row+(row-1)]?.country }}</p>
                    </div>
                    <p class="text-lg font-normal">
                      {{ projects[row+(row-1)]?.description }}
                    </p>
                  </div>
                  <div class="flex flex-wrap justify-between">
                    <p><small class="text-xs">{{ $timeAgo(projects[row+(row-1)]?.date) }}</small></p>
                    <NuxtLink :to="projects[row+(row-1)]?.url" target="_blank">
                      <button class="px-4 text-lg font-bold hover:tracking-widest transition-all ease-in-out duration-200">learn more&nbsp;<i class="fa-solid fa-arrow-right-long -rotate-45"></i></button>
                    </NuxtLink>
                  </div>
                </div>
              </template>
            </div>
          </div>
          <div class="col-span-1 max-lg:hidden py-6"></div>
        </div>
      </template>
    </section>

    <section class="relative xl:container xl:m-auto w-full">
      <div class="grid grid-cols-12 border-x border-x-black lg:divide-x divide-black border-black">
        <div class="col-span-1 max-lg:hidden py-6"></div>
        <div class="col-span-10 max-lg:col-span-12 text-lg xs:text-3xl sm:text-5xl text-start font-space-mono font-normal capitalize border-b border-black">
          <div class="px-4 lg:px-8 py-6 lg:py-12">
            <div class="flex flex-wrap justify-between items-end gap-2 w-full h-fit">
              <h2 class="text-2xl xs:text-4xl xl:text-5xl uppercase font-bold tracking-widest">work process</h2>
              <div class="flex flex-row items-start gap-4">
                <div v-for="row in 4" :key="row" class="w-8 h-32 border border-black rounded-[50px/200px]" :class="{ '-ml-6' : row > 1}"></div>
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
      projects: [
        { id: 1, name: 'Find Art Mystery - Apps', country: 'ID', date: '2021-06-19 00:00:00', url: 'https://play.google.com/store/apps/details?id=com.Pradita.Find&hl=en_US&gl=US', description: 'AR-based application that has various features such as indoor navigation, AR object exhibition and AR-based games using the Unity Engine. can be used inside summarecon mall serpong.' },
        { id: 2, name: 'Wrathnet JD', country: 'ID', date: '2021-10-30 00:00:00', url: 'https://wrathnet.com', description: 'Jade Dynasty Wrathnet portal web game with player\'s CMS and integrated transaction using available payment gateways located in indonesia.' },
        { id: 3, name: 'Teamremod JD', country: 'VE', date: '2023-01-30 00:00:00', url: 'https://teamremod.com', description: 'Jade Dynasty Teamremod portal web game with player\'s CMS and integrated transaction using available payment gateways located in venezuela.' },
        { id: 4, name: 'Vengance JD', country: 'US', date: '2023-01-30 00:00:00', url: 'https://vengancejd.com', description: 'Jade Dynasty Vengance portal web game with player\'s CMS and integrated transaction using available payment gateways located in united states.' },
        { id: 5, name: 'Admin Teamremod JD', country: 'VE', date: '2023-01-30 00:00:00', url: 'https://special.teamremod.com', description: 'Jade Dynasty Teamremod portal web game admin panel with a complex CMS located in venezuela.' },
        { id: 6, name: 'TPID', country: 'ID', date: '2023-01-09 00:00:00', url: 'http://103.50.218.58/tpid', description: 'The Regional Inflation Control Team website, which was developed by Tangerang City Communications and Information Department. It features a basic CMS and a user-friendly interface, designed for a client located in Indonesia.' },
        { id: 7, name: 'Kadaku', country: 'ID', date: '2023-02-13 00:00:00', url: 'https://kadaku.id', description: 'Digital invitation website in Indonesia allows users to buy and customize templates to match their preferred designs and formats.' },
        { id: 8, name: 'Local Champion', country: 'ID', date: '2023-09-25 00:00:00', url: 'https://localchampion.id', description: 'Integrated - sustainable community empowerment platform to bring forth sustainable innovations that benefit both their local communities and the world.' },
      ]
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