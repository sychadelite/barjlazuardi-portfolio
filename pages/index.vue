<template>
  <div class="min-h-screen">
    <section class="relative xl:container xl:m-auto w-full">
      <div class="grid grid-cols-12 border-x border-x-black lg:divide-x divide-black border-black">
        <div class="col-span-1 max-lg:hidden flex">
          <div class="w-full h-full bg-cover bg-left bg-no-repeat" style="background-image: url('/img/external/b07483174922421.64ab19eab6d61.png');"></div>
        </div>
        <div class="col-span-8 max-lg:col-span-12 text-lg xs:text-3xl sm:text-5xl font-dune-rise font-extrabold capitalize">
          <div class="flex flex-wrap sm:flex-row divide-x divide-black">
            <div class="w-full sm:w-[75%] lg:w-9/12 sm:border-b border-black divide-y divide-black">
              <div class="px-1 md:px-4 py-10 lg:py-12">
                <h1 class="line-clamp-1">{{ $t('minimalistic') }}</h1>
              </div>
              <div class="px-1 md:px-4 py-10 lg:py-12">
                <h1 class="line-clamp-1">& {{ $t('creative') }}</h1>
              </div>
              <div class="px-1 md:px-4 py-10 lg:py-12">
                <h1 class="line-clamp-1">{{ $t('websites') }}</h1>
              </div>
            </div>
            <div class="w-full sm:w-[25%] lg:w-3/12 border-b border-black divide-y divide-black">
              <div class="w-full h-full px-4 py-6 lg:py-12">
                <div class="flex flex-col-reverse sm:flex-col gap-8 sm:gap-2 justify-between w-full text-base sm:text-sm font-space-mono font-normal uppercase" :style="store.index.getLayout.main_layout.innerWidth > 640 ? 'writing-mode: vertical-rl;' : ''">
                  <div class="flex flex-col sm:flex-row justify-between items-center gap-x-2 gap-y-6">
                    <p class="text-start sm:h-60">
                      {{ $t('my websites embody a minimalistic and creative design, solve business issues, and are user-friendly.') }}
                    </p>
                    <div class="m-auto" style="writing-mode: horizontal-tb;">
                      <img src="/img/icons/sych-base.png" alt="sych" class="h-16 grayscale invert">
                      <small>{{ store.index.getLayout.main_layout.innerWidth }}</small>
                    </div>
                  </div>
                  <div class="flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-4">
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
                <div class="flex flex-wrap lg:flex-col justify-start xs:justify-around lg:justify-evenly gap-y-8 max-xs:pl-4">
                  <div class="flex flex-col lg:flex-row justify-around gap-x-4 gap-y-8 max-lg:text-start uppercase"> 
                    <NuxtLink to="https://vuejs.org/" target="_blank" class="w-fit h-fit text-base xs:text-xl sm:text-3xl lg:text-lg font-asgard-fat tracking-widest hover:tracking-tight transition-all ease-in-out duration-200">{{ $t('vue.experts') }} &gt;&gt;</NuxtLink>
                    <NuxtLink to="/" class="w-fit h-fit text-base xs:text-xl sm:text-3xl lg:text-lg font-asgard-fat tracking-widest hover:tracking-tight transition-all ease-in-out duration-200">{{ $t('behance') }} &gt;&gt;</NuxtLink>
                    <NuxtLink to="/" class="w-fit h-fit text-base xs:text-xl sm:text-3xl lg:text-lg font-asgard-fat tracking-widest hover:tracking-tight transition-all ease-in-out duration-200">{{ $t('whatsapp') }} &gt;&gt;</NuxtLink>
                    <NuxtLink to="/" class="w-fit h-fit text-base xs:text-xl sm:text-3xl lg:text-lg font-asgard-fat tracking-widest hover:tracking-tight transition-all ease-in-out duration-200">{{ $t('telegram') }} &gt;&gt;</NuxtLink>
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
        <div class="col-span-1 max-lg:hidden flex">
          <div class="w-full h-full bg-cover bg-right bg-no-repeat" style="background-image: url('/img/external/b07483174922421.64ab19eab6d61.png');"></div>
        </div>
      </div>

      <!-- BROADCAST -->
      <section id="broadcast" class="relative xl:container xl:m-auto w-full">
        <div class="grid grid-cols-12 border-x border-x-black lg:divide-x divide-black border-black">
          <div class="col-span-1 max-lg:hidden flex">
            <div class="w-full h-full bg-cover bg-left bg-no-repeat" style="background-image: url('/img/external/free-palestine-cave-pov-jet.jpg');"></div>
          </div>
          <div class="col-span-10 max-lg:col-span-12 text-lg xs:text-3xl sm:text-5xl text-start font-space-mono font-normal capitalize border-b border-black">
            <div class="flex flex-wrap w-full h-fit">
              <div v-for="row in broadcast.posters" :key="row.id" class="w-full xs:w-2/4 sm:w-1/4 h-40 sm:h-40 xl:h-72 bg-repeat-round" :style="`background-image: url(${row.image}); background-position: inherit;`"></div>
            </div>
          </div>
          <div class="col-span-1 max-lg:hidden flex">
            <div class="w-full h-full bg-cover bg-right bg-no-repeat" style="background-image: url('/img/external/free-palestine-cave-pov-jet.jpg');"></div>
          </div>
        </div>
      </section>
      <!-- BROADCAST -->
    </section>

    <section id="about-me" class="relative xl:container xl:m-auto w-full">
      <div class="grid grid-cols-12 border-x border-x-black lg:divide-x divide-black border-black">
        <div class="col-span-1 order-4 lg:order-1 max-lg:hidden py-6">
          <div class="w-full h-full bg-cover bg-left bg-no-repeat" style="background-image: url('/img/external/b07483174922421.64ab19eab6d61.png');"></div>
        </div>
        <div class="col-span-5 order-3 lg:order-2 max-lg:col-span-12 text-lg xs:text-3xl sm:text-5xl text-start font-space-mono font-normal capitalize border-b border-black">
          <div class="px-4 lg:px-8 py-6 lg:py-12">
            <h2 class="text-3xl xs:text-4xl xl:text-5xl uppercase font-bold tracking-widest">{{ $t('hello') }};)<br>{{ $t('my name is barj') }}</h2>
            <p class="text-base xs:text-lg uppercase mt-5">
              {{ $t("I'm a web developer who loves tinkering with technology.") }}
              <br>
              <br>
              {{ $t('I have 3 years of experience in full-stack web development, which has equipped me with the skills to create robust and dynamic web applications.') }}
              <br>
              {{ $t('my websites prioritize security, harmoniously blend a user-friendly, responsive design, and effectively tackle business challenges with elegance.') }}
              <br>
              <br>
              {{ $t('this experience has also enabled me to effectively collaborate with cross-functional teams on various projects.') }}
              <!-- Feel free to offer framework suggestions, as I am adaptable to a wide range of frameworks tailored to specific user requirements. -->
              <br>
            </p>
            <button class="text-lg uppercase font-extrabold py-4 hover:tracking-widest transition-all ease-in-out duration-200">
              {{ $t('contact with me') }}
              <i class="fa-solid fa-arrow-trend-up"></i>
            </button>
          </div>
        </div>
        <div class="col-span-5 order-2 lg:order-3 max-lg:col-span-12 text-lg xs:text-3xl sm:text-5xl text-start font-middle-earth font-normal capitalize border-b border-black">
          <div class="w-full h-full min-h-[20rem] bg-center bg-cover bg-no-repeat" style="background-image: url('/img/profile/1637566473719-grayscale.jpeg');"></div>
        </div>
        <div class="col-span-1 order-1 lg:order-4 max-lg:hidden py-6">
          <div class="w-full h-full bg-cover bg-right bg-no-repeat" style="background-image: url('/img/external/b07483174922421.64ab19eab6d61.png');"></div>
        </div>
      </div>
    </section>

    <section id="portfolio" class="relative xl:container xl:m-auto w-full">
      <div class="grid grid-cols-12 border-x border-x-black lg:divide-x divide-black border-black">
        <div class="col-span-1 max-lg:hidden py-6">
          <div class="w-full h-full bg-cover bg-left bg-no-repeat" style="background-image: url('/img/external/b07483174922421.64ab19eab6d61.png');"></div>
        </div>
        <div class="col-span-10 max-lg:col-span-12 text-lg xs:text-3xl sm:text-5xl text-start font-space-mono font-normal capitalize border-b border-black">
          <div class="px-4 lg:px-8 py-6 lg:py-12">
            <div class="flex flex-wrap justify-between items-end gap-2 w-full h-fit">
              <h2 class="text-2xl xs:text-4xl xl:text-5xl uppercase font-bold tracking-widest">{{ $t('my portfolio') }}</h2>
              <div class="flex flex-row items-start gap-4 h-20 sm:h-28">
                <div class="flex flex-col justify-between h-full">
                  <p class="text-lg font-bold tracking-tighter">{{ $t('projects') }}</p>
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
        <div class="col-span-1 max-lg:hidden py-6">
          <div class="w-full h-full bg-cover bg-right bg-no-repeat" style="background-image: url('/img/external/b07483174922421.64ab19eab6d61.png');"></div>
        </div>
      </div>
    </section>

    <section class="relative xl:container xl:m-auto w-full">
      <template v-for="row in Math.round(projects.length / 2)" :key="row">
        <div class="grid grid-cols-12 border-x border-x-black lg:divide-x divide-black border-black">
          <div class="col-span-1 max-lg:hidden py-6">
            <div class="w-full h-full bg-cover bg-left bg-no-repeat" style="background-image: url('/img/external/b07483174922421.64ab19eab6d61.png');"></div>
          </div>
          <div class="col-span-5 max-lg:col-span-12 text-lg xs:text-3xl sm:text-5xl text-start font-space-mono font-normal capitalize border-b border-black">
            <div class="px-4 lg:px-8 py-6 lg:py-12 h-full">
              <template v-if="projects[row+(row-2)]?.id">
                <div class="flex flex-col justify-between gap-2 w-full h-full">
                  <div>
                    <div class="flex flex-wrap gap-2 justify-between mb-5">
                      <h4 class="text-2xl sm:text-3xl font-bold">{{ projects[row+(row-2)]?.name }}</h4>
                      <p class="inline-flex items-center text-sm">{{ projects[row+(row-2)]?.country }}</p>
                    </div>
                    <p class="text-base xs:text-lg font-normal">
                      {{ $t(projects[row+(row-2)]?.description) }}
                    </p>
                  </div>
                  <div class="flex flex-wrap justify-between">
                    <p><small class="text-xs sm:text-sm">{{ $timeAgo(projects[row+(row-2)]?.date) }}</small></p>
                    <NuxtLink :to="projects[row+(row-2)]?.url" target="_blank">
                      <button class="text-base sm:text-lg font-bold uppercase hover:tracking-widest transition-all ease-in-out duration-200">{{ $t('learn more') }}&nbsp;<i class="fa-solid fa-arrow-right-long -rotate-45"></i></button>
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
                      <h4 class="text-2xl sm:text-3xl font-bold">{{ projects[row+(row-1)]?.name }}</h4>
                      <p class="inline-flex items-center text-sm">{{ projects[row+(row-1)]?.country }}</p>
                    </div>
                    <p class="text-base xs:text-lg font-normal">
                      {{ $t(projects[row+(row-1)]?.description) }}
                    </p>
                  </div>
                  <div class="flex flex-wrap justify-between">
                    <p><small class="text-xs sm:text-sm">{{ $timeAgo(projects[row+(row-1)]?.date) }}</small></p>
                    <NuxtLink :to="projects[row+(row-1)]?.url" target="_blank">
                      <button class="text-base sm:text-lg font-bold uppercase hover:tracking-widest transition-all ease-in-out duration-200">{{ $t('learn more') }}&nbsp;<i class="fa-solid fa-arrow-right-long -rotate-45"></i></button>
                    </NuxtLink>
                  </div>
                </div>
              </template>
            </div>
          </div>
          <div class="col-span-1 max-lg:hidden py-6">
            <div class="w-full h-full bg-cover bg-right bg-no-repeat" style="background-image: url('/img/external/b07483174922421.64ab19eab6d61.png');"></div>
          </div>
        </div>
      </template>
    </section>

    <section id="workflow" class="relative xl:container xl:m-auto w-full">
      <div class="grid grid-cols-12 border-x border-x-black lg:divide-x divide-black border-black">
        <div class="col-span-1 max-lg:hidden py-6">
          <div class="w-full h-full bg-cover bg-left bg-no-repeat" style="background-image: url('/img/external/b07483174922421.64ab19eab6d61.png');"></div>
        </div>
        <div class="col-span-10 max-lg:col-span-12 text-lg xs:text-3xl sm:text-5xl text-start font-space-mono font-normal capitalize border-b border-black">
          <div class="px-4 lg:px-8 py-6 lg:py-12">
            <div class="flex flex-wrap-reverse justify-between items-end gap-2 w-full h-fit">
              <h2 class="text-2xl xs:text-4xl xl:text-5xl uppercase font-bold tracking-widest">{{ $t('work process') }}</h2>
              <div class="flex flex-row items-start gap-4">
                <div v-for="row in 4" :key="row" class="w-8 h-32 border border-black rounded-[50px/200px]" :class="{ '-ml-6' : row > 1}"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-1 max-lg:hidden py-6">
          <div class="w-full h-full bg-cover bg-right bg-no-repeat" style="background-image: url('/img/external/b07483174922421.64ab19eab6d61.png');"></div>
        </div>
      </div>
    </section>

    <section class="relative xl:container xl:m-auto w-full">
      <template v-for="(row, index) in workflow" :key="row.id">
        <div class="grid grid-cols-12 border-x border-x-black lg:divide-x divide-black border-black">
          <div class="col-span-1 max-lg:hidden py-6">
            <div class="w-full h-full bg-cover bg-left bg-no-repeat" style="background-image: url('/img/external/b07483174922421.64ab19eab6d61.png');"></div>
          </div>
          <div class="col-span-10 max-lg:col-span-12 text-lg xs:text-3xl sm:text-5xl text-start font-space-mono font-normal capitalize border-b border-black">
            <div class="px-4 lg:px-8 py-6 lg:py-12">
              <div class="flex flex-row justify-between items-center gap-4 w-full h-fit">
                <div class="w-10/12">
                  <h4 class="text-2xl sm:text-3xl font-bold tracking-tight uppercase mb-5">{{ String(row.id).padStart(2, '0') }}. {{ $t(row.name) }}</h4>
                  <p class="text-base xs:text-lg font-normal">{{ $t(row.description) }}</p>
                </div>
                <div class="w-2/12">
                  <div class="ml-auto max-w-[6rem]">
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.0121 19.162L14.8241 17.3397L16.2423 18.75L12.0116 23.0045L7.75684 18.7738L9.16708 17.3557L11.0121 19.1904L10.9976 0.99696L12.9976 0.995361L13.0121 19.162Z" :fill="index % 2 == 0 ? 'black' : 'transparent'" :stroke="index % 2 == 0 ? '' : 'black'" :stroke-width="index % 2 == 0 ? '' : '.25'"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-1 max-lg:hidden py-6">
            <div class="w-full h-full bg-cover bg-right bg-no-repeat" style="background-image: url('/img/external/b07483174922421.64ab19eab6d61.png');"></div>
          </div>
        </div>
      </template>
    </section>

    <section id="price" class="relative xl:container xl:m-auto w-full">
      <div class="grid grid-cols-12 border-x border-x-black lg:divide-x divide-black border-black">
        <div class="col-span-1 max-lg:hidden py-6">
          <div class="w-full h-full bg-cover bg-left bg-no-repeat" style="background-image: url('/img/external/b07483174922421.64ab19eab6d61.png');"></div>
        </div>
        <div class="col-span-10 max-lg:col-span-12 text-lg xs:text-3xl sm:text-5xl text-start font-space-mono font-normal capitalize border-b border-black">
          <div class="px-4 lg:px-8 py-6 lg:py-12">
            <div class="flex flex-col sm:flex-row justify-end sm:justify-between items-end gap-y-4 gap-x-8 w-full h-fit">
              <h2 class="text-2xl xs:text-4xl xl:text-5xl uppercase font-bold tracking-widest">{{ $t('prices') }}</h2>
              <div class="text-end">
                <small class="text-xs font-semibold tracking-tighter">// {{ $t('23.349124') }}, {{ $t('13.184303') }}</small>
                <div class="flex flex-row justify-end items-start gap-4 my-5">
                  <div v-for="row in 7" :key="row" class="arrow arrow--left" :class="{ '-mr-3' : row <= 7}"></div>
                </div>
                <p class="text-base xs:text-lg sm:text-2xl font-semibold tracking-tighter mt-5">
                  {{ $t('50% of prepayment is required') }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-1 max-lg:hidden py-6">
          <div class="w-full h-full bg-cover bg-right bg-no-repeat" style="background-image: url('/img/external/b07483174922421.64ab19eab6d61.png');"></div>
        </div>
      </div>
    </section>

    <section class="relative xl:container xl:m-auto w-full">
      <template v-for="row in Math.round(prices.length / 2)" :key="row">
        <div class="grid grid-cols-12 border-x border-x-black lg:divide-x divide-black border-black">
          <div class="col-span-1 max-lg:hidden py-6">
            <div class="w-full h-full bg-cover bg-left bg-no-repeat" style="background-image: url('/img/external/b07483174922421.64ab19eab6d61.png');"></div>
          </div>
          <div class="col-span-5 max-lg:col-span-12 text-lg xs:text-3xl sm:text-5xl text-start font-space-mono font-normal capitalize border-b border-black">
            <div class="px-4 lg:px-8 py-6 lg:py-12 h-full">
              <template v-if="prices[row+(row-2)]?.id">
                <div class="flex flex-col justify-between gap-2 w-full h-full">
                  <div class="mb-12">
                    <div class="flex flex-wrap gap-2 justify-between mb-5">
                      <h4 class="text-2xl sm:text-3xl font-bold tracking-tight uppercase">{{ $t(prices[row+(row-2)]?.name) }}</h4>
                      <p class="inline-flex items-center text-sm sm:text-lg font-bold tracking-tight uppercase">{{ $t('from') }} ${{ prices[row+(row-2)]?.amount }}</p>
                    </div>
                    <p class="text-base xs:text-lg font-normal">
                      {{ $t(prices[row+(row-2)]?.description) }}
                    </p>
                  </div>
                  <div class="flex flex-wrap justify-between gap-4">
                    <p><small class="text-sm sm:text-base tracking-tight uppercase">{{ $t('from') }} {{ prices[row+(row-2)]?.duration }} {{ $t('business days') }}</small></p>
                    <NuxtLink :to="prices[row+(row-2)]?.url" target="_blank">
                      <button class="text-lg font-bold uppercase hover:tracking-wide transition-all ease-in-out duration-200">{{ $t('create') }} {{ $t(prices[row+(row-2)]?.name) }}&nbsp;<i class="fa-solid fa-arrow-right-long -rotate-45"></i></button>
                    </NuxtLink>
                  </div>
                </div>
              </template>
            </div>
          </div>
          <div class="col-span-5 max-lg:col-span-12 text-lg xs:text-3xl sm:text-5xl text-start font-space-mono font-normal capitalize border-b border-black">
            <div class="px-4 lg:px-8 py-6 lg:py-12 h-full">
              <template v-if="prices[row+(row-1)]?.id">
                <div class="flex flex-col justify-between gap-2 w-full h-full">
                  <div class="mb-12">
                    <div class="flex flex-wrap gap-2 justify-between mb-5">
                      <h4 class="text-2xl sm:text-3xl font-bold tracking-tight uppercase">{{ $t(prices[row+(row-1)]?.name) }}</h4>
                      <p class="inline-flex items-center text-sm sm:text-lg font-bold tracking-tight uppercase">{{ $t('from') }} ${{ prices[row+(row-1)]?.amount }}</p>
                    </div>
                    <p class="text-base xs:text-lg font-normal">
                      {{ $t(prices[row+(row-1)]?.description) }}
                    </p>
                  </div>
                  <div class="flex flex-wrap justify-between gap-4">
                    <p><small class="text-sm sm:text-base tracking-tight uppercase">{{ $t('from') }} {{ prices[row+(row-1)]?.duration }} {{ $t('business days') }}</small></p>
                    <NuxtLink :to="prices[row+(row-1)]?.url" target="_blank">
                      <button class="text-base sm:text-lg font-bold uppercase hover:tracking-wide transition-all ease-in-out duration-200">{{ $t('create') }} {{ $t(prices[row+(row-1)]?.name) }}&nbsp;<i class="fa-solid fa-arrow-right-long -rotate-45"></i></button>
                    </NuxtLink>
                  </div>
                </div>
              </template>
            </div>
          </div>
          <div class="col-span-1 max-lg:hidden py-6">
            <div class="w-full h-full bg-cover bg-right bg-no-repeat" style="background-image: url('/img/external/b07483174922421.64ab19eab6d61.png');"></div>
          </div>
        </div>
      </template>
    </section>

    <section id="contact" class="relative xl:container xl:m-auto w-full">
      <div class="grid grid-cols-12 border-x border-x-black lg:divide-x divide-black border-black">
        <div class="col-span-1 max-lg:hidden py-6">
          <div class="w-full h-full bg-cover bg-left bg-no-repeat" style="background-image: url('/img/external/b07483174922421.64ab19eab6d61.png');"></div>
        </div>
        <div class="col-span-10 max-lg:col-span-12 text-lg xs:text-3xl sm:text-5xl text-start font-space-mono font-normal capitalize border-b border-black">
          <div class="sm:relative px-4 lg:px-8 py-6 lg:py-12">
            <div class="flex flex-col-reverse sm:flex-row sm:justify-between sm:items-end gap-y-12 gap-x-8 w-full h-fit">
              <h2 class="w-full sm:w-2/4 text-2xl xs:text-4xl xl:text-5xl uppercase font-bold tracking-widest">{{ $t('contacts') }}</h2>
              <div class="max-sm:relative w-full sm:w-2/4 h-40 text-end">
                <div class="absolute top-0 right-0 w-16 h-2/4 bg-black"></div>
                <svg class="absolute bottom-0 right-0 w-full xs:w-2/4 h-4/5" x="0" y="0">
                  <defs>
                    <pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width="5" height="14" patternTransform="rotate(-45 2 2)">
                      <path d="M -1,2 l 6,0" stroke="#000000" stroke-width="4"/>
                    </pattern>
                  </defs>
                  <rect x="1" y="1" width="100%" height="100%" stroke="transparent" stroke-width="2" fill="url(#diagonalHatch)"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-1 max-lg:hidden py-6">
          <div class="w-full h-full bg-cover bg-right bg-no-repeat" style="background-image: url('/img/external/b07483174922421.64ab19eab6d61.png');"></div>
        </div>
      </div>
    </section>

    <section class="relative xl:container xl:m-auto w-full">
      <div class="grid grid-cols-12 border-x border-x-black lg:divide-x divide-black border-black">
        <div class="col-span-1 max-lg:hidden py-6">
          <div class="w-full h-full bg-cover bg-left bg-no-repeat" style="background-image: url('/img/external/b07483174922421.64ab19eab6d61.png');"></div>
        </div>
        <div class="col-span-5 max-lg:col-span-12 text-lg xs:text-3xl sm:text-5xl text-start font-space-mono font-normal capitalize border-b border-black">
          <div class="px-4 lg:px-8 py-6 lg:py-12 h-full">
            <div class="flex flex-col justify-between gap-12 w-full h-full">
              <h4 class="text-3xl lg:text-xl font-bold tracking-tight uppercase">{{ $t("let's make something incredible together") }}</h4>
              <div class="flex flex-col gap-x-4 gap-y-4 sm:gap-y-8 uppercase"> 
                <NuxtLink to="https://vuejs.org/" target="_blank" class="w-fit h-fit text-base xs:text-lg sm:text-2xl lg:text-lg font-asgard-fat tracking-widest hover:tracking-tight transition-all ease-in-out duration-200">{{ $t('vue.experts') }} &gt;&gt;</NuxtLink>
                <NuxtLink to="/" class="w-fit h-fit text-base xs:text-lg sm:text-2xl lg:text-lg font-asgard-fat tracking-widest hover:tracking-tight transition-all ease-in-out duration-200">{{ $t('behance') }} &gt;&gt;</NuxtLink>
                <NuxtLink to="/" class="w-fit h-fit text-base xs:text-lg sm:text-2xl lg:text-lg font-asgard-fat tracking-widest hover:tracking-tight transition-all ease-in-out duration-200">{{ $t('whatsapp') }} &gt;&gt;</NuxtLink>
                <NuxtLink to="/" class="w-fit h-fit text-base xs:text-lg sm:text-2xl lg:text-lg font-asgard-fat tracking-widest hover:tracking-tight transition-all ease-in-out duration-200">{{ $t('telegram') }} &gt;&gt;</NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-5 max-lg:col-span-12 text-lg xs:text-3xl sm:text-5xl text-start font-space-mono font-normal capitalize border-b border-black">
          <div class="px-4 lg:px-8 py-6 lg:py-12 h-full">
            <div class="flex flex-col justify-start gap-4 w-full text-5xl">
              <div class="form__group field">
                <input id="name" name="name" type="text" class="form__field tracking-wide" :placeholder="$t('name')" required />
                <label for="name" class="form__label uppercase">{{ $t('name') }}</label>
              </div>
              <div class="form__group field">
                <input id="email" name="email" type="email" class="form__field tracking-wide" :placeholder="$t('email')" required />
                <label for="email" class="form__label uppercase">{{ $t('email') }}</label>
              </div>
              <div class="form__group field">
                <div id="web-type" class="form__field dropdown">
                  <div class="flex flex-row justify-between items-center py-2 cursor-pointer">
                    <span>{{ $t('website type') }}</span>
                    <i class="fa fa-chevron-left dropdown-icon text-xs"></i>
                  </div>
                  <input type="hidden" name="web-type">
                  <ul class="dropdown-menu absolute left-0 hidden w-full max-h-[160px] mt-3 ring-2 ring-offset-4 ring-black overflow-y-auto bg-black z-10" data-lenis-prevent>
                    <template v-for="row in prices" :key="row.id">
                      <li :id="row.id" class="p-3 text-white hover:bg-gray-700 transition-all ease-in-out duration-200 cursor-pointer" :class="{ 'bg-gray-700' : payload.contact.web_type == row.name }" @click="payload.contact.web_type = row.name">{{ $t(row.name) }}</li>
                    </template>
                  </ul>
                </div>
              </div>
              <div class="form__group field py-6">
                <textarea id="description" name="description" type="text" class="form__field tracking-wide min-h-[100px]" :placeholder="$t('description')" required rows="8"></textarea>
                <label for="description" class="form__label uppercase">{{ $t('tell about your project') }}</label>
              </div>
            </div>
            <div class="flex flex-wrap justify-between items-center gap-4">
              <button class="text-2xl uppercase font-extrabold py-4 hover:tracking-widest transition-all ease-in-out duration-200">
                {{ $t('send') }}
                <i class="fa-solid fa-arrow-trend-up"></i>
              </button>
              <div>
                <p class="text-xs text-gray-400 uppercase tracking-tighter">
                  {{ $t('by clicking the button you accept') }}
                  <br>
                  <NuxtLink to="/privacy-policy" class="text-black">
                    {{ $t('the privacy policy.') }}
                  </NuxtLink>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-1 max-lg:hidden py-6">
          <div class="w-full h-full bg-cover bg-right bg-no-repeat" style="background-image: url('/img/external/b07483174922421.64ab19eab6d61.png');"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useIndexStore } from '@/store/index'

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
      broadcast: {
        posters: [
          { id: 1, image: '/img/external/f4f15e179956267.650276719158a.png' },
          { id: 2, image: '/img/external/netanyahu-face-as-hitler.png' },
          { id: 3, image: '/img/external/free-palestine-memo.jpg' },
          { id: 4, image: '/img/external/i-stand-with-palestine.jpg' },
          { id: 5, image: '/img/external/the-hitler-mary-jane.jpg' },
          { id: 6, image: '/img/external/free-palestine-cave-pov-jet.jpg' },
          { id: 7, image: '/img/external/34ce61181231207.65185d614c717.jpg' },
          { id: 8, image: '/gif/resistance-gaza.gif' },
        ]
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
      ],
      workflow: [
        { id: 1, name: 'brief and analytics', description: 'We conduct an interview, and then I learn all the details of project and the specific details of a business. I research competitors, collect references, form ideas for a project, and develop a structure for a future site.' },
        { id: 2, name: 'design and implementation', description: 'I designed a responsive interface in order to improve the quality of the user experience when using the website / app that will be built. The system and data flow mapping diagram also needs to be designed to make it easier for stakeholders and technicians to understand the architecture. Then, I started to carry out initial development by implementing every agreed detail.' },
        { id: 3, name: 'code and deploy', description: 'When the initial development is done, I start the programming process to achieve goals based on confidentiality, integrity and availability of information in the chosen stack. I connect forms and services, perform basic SEO setup, test and debug the site for errors and deploy it.' },
      ],
      prices: [
        { id: 1, name: 'Landing', amount: 500, duration: 7, url: '/', description: 'A promo page or landing page will be suitable for selling a small number of products or services. Includes: design, coding, basic SEO optimization.' },
        { id: 2, name: 'Website', amount: 1000, duration: 10, url: '/', description: 'A multi-page website that will represent the company, its products or service. Includes: design, coding, basic SEO optimization.' },
        { id: 3, name: 'Shop', amount: 1200, duration: 14, url: '/', description: 'A store will work for a business and provide a wide variety of functions: a shopping cart, online payments and an internal CRM system. Includes: design, coding, basic SEO optimization.' },
        { id: 4, name: 'Design', amount: 3500, duration: 7, url: '/', description: 'Website design will be developed in figma. Includes: interaction design, adaptive version, illustration and animation development.' },
      ],
      payload: {
        contact: {
          name: '',
          email: '',
          web_type: '',
          description: '',
        }
      },
    }
  },
  beforeMount() {
    this.store.index.setRootPage('index_page', this)
  },
  mounted() {
    this.$nextTick(() => {
      this.initGsap()

      this.initFormDropdown()
    })
  },
  methods: {
    initGsap() {
      const { $Lenis, $LocomotiveScroll, $gsap, $ScrollTrigger } = useNuxtApp()
      
      // Gsap logic
    },
    initFormDropdown() {
      /* Dropdown Menu */
      let isSliding = false;

      $('.form__group .dropdown').click(function () {
        if (isSliding) return; // Return if already sliding
        isSliding = true;
        
        const $this = $(this);
        $this.find('.dropdown-icon').toggleClass('-rotate-90');
        $this.attr('tabindex', 1).focus();
        $this.toggleClass('active');
        $this.find('.dropdown-menu').slideToggle(300, function () {
          isSliding = false;
        });
      });

      $('.form__group .dropdown').focusout(function () {
        if (isSliding) return; // Return if already sliding
        isSliding = true;
        
        const $this = $(this);
        $this.removeClass('active');
        $this.find('.dropdown-menu').slideUp(300, function () {
          isSliding = false;
        });
      });

      $('.form__group .dropdown .dropdown-menu li').click(function () {
        if (isSliding) return; // Return if already sliding
        isSliding = true;
        
        const $this = $(this);
        const parentDropdown = $this.parents('.form__group .dropdown');
        parentDropdown.find('span').text($this.text());
        parentDropdown.find('input').attr('value', $this.attr('id'));
        isSliding = false;
      });

      /* End Dropdown Menu */

      $('.dropdown-menu li').click(function () {
        if (isSliding) return; // Return if already sliding
        isSliding = true;
        
        const $this = $(this);
        const input = '<strong>' + $this.parents('.form__group .dropdown').find('input').val() + '</strong>';
        const msg = '<span class="msg">Hidden input value: ';
        $('.msg').html(msg + input + '</span');
        isSliding = false;
      });
    },
  }
}
</script>

<style lang="scss">
</style>