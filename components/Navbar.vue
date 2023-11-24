<template>
  <nav ref="top-nav" class="sticky top-0 xl:container xl:m-auto grid grid-cols-12 bg-white border-x border-x-black divide-x divide-black border-b border-black uppercase text-sm xs:text-base z-40">
    <div class="col-span-1 max-lg:hidden flex">
      <div class="w-full h-full bg-cover bg-center bg-no-repeat" style="background-image: url('/img/external/netanyahu-face-as-hitler.png');"></div>
    </div>
    <div class="col-span-8 max-lg:col-span-9 max-sm:col-span-8 flex justify-start py-2 lg:py-6">
      <div class="flex flex-wrap gap-4 justify-between items-center w-full h-full px-2 sm:px-6">
        <div class="max-sm:w-full">
          <h1 class="font-bold text-start line-clamp-1">
            @barjlazuardi
          </h1>
          <div class="social-media flex flex-wrap gap-x-2 gap-y-1">
            <NuxtLink v-for="row in social_media" :key="row.id" :to="row.url" target="_blank" :title="row.name" class="line-clamp-1 hover:text-contessa-700 hover:scale-90 opacity-0">
              <div v-html="row.icon"></div>
            </NuxtLink>
          </div>
        </div>
        <ul class="nav-link flex flex-row gap-6 max-lg:hidden">
          <li><router-link to="#about-me" class="anim-multi-underline" :style="$route.hash == '#about-me' ? 'background-size: 100% 2px; background-position-x: left;' : ''">{{ $t('about me') }}</router-link></li>
          <li><router-link to="#portfolio" class="anim-multi-underline" :style="$route.hash == '#portfolio' ? 'background-size: 100% 2px; background-position-x: left;' : ''">{{ $t('portfolio') }}</router-link></li>
          <li><router-link to="#workflow" class="anim-multi-underline" :style="$route.hash == '#workflow' ? 'background-size: 100% 2px; background-position-x: left;' : ''">{{ $t('process') }}</router-link></li>
          <li><router-link to="#price" class="anim-multi-underline" :style="$route.hash == '#price' ? 'background-size: 100% 2px; background-position-x: left;' : ''">{{ $t('prices') }}</router-link></li>
          <li class="relative">
            <a ref="caret-lang" id="caret-lang" class="anim-multi-underline block min-w-[3rem] uppercase cursor-pointer" :style="isLangOpen ? 'background-size: 100% 2px; background-position-x: left;' : ''" @click="toggleLang">
              {{ selectedLang.slice(0, 2) }}&nbsp;<i class="fa-solid fa-caret-down"></i>
            </a>
            <div ref="dropdown-lang" data-lenis-prevent class="dropdown-lang absolute top-10 left-0 opacity-0 h-0 max-h-56 bg-black text-white ring-1 ring-offset-4 ring-black overflow-y-auto overflow-invisible">
              <ul class="text-start" :class="{ 'hidden': store.index.getLayout.main_layout.innerWidth < 1024 }">
                <li v-for="row in languages" :key="row.id" class="flex gap-2 pl-4 pr-8 py-2 hover:bg-gray-700 capitalize cursor-pointer" :class="{ 'bg-gray-700' : selectedLang == row.code }" @click="selectedLang = row.code">
                  <img :src="`/img/flags/svg/${row.flag}.svg`" :alt="row.flag" class="w-4">
                  {{ row.name }}
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-span-2 max-lg:col-span-3 max-sm:col-span-4 flex justify-center py-2 lg:py-6">
      <div class="flex justify-center items-center h-full max-lg:hidden">
        <router-link to="#contact" :class="{'underline decoration-wavy' : $route.hash == '#contact'}">
          <h1 class="font-bold uppercase">
            {{ $t('contact') }}
          </h1>
        </router-link>
      </div>
      <div ref="ham-menu" id="ham-menu" class="lg:hidden" :class="{ 'open' : isMenuOpen }" @click="toggleMenu">
        <span></span>
        <span></span>
        <span class="!w-0"></span>
        <span class="!w-3/4"></span>
        <span></span>
        <span></span>
        <span class="!w-1/2 !translate-x-[8px] !-translate-y-[11px] !-scale-[1] !-rotate-[45deg]" :class="{ '!opacity-0' : !isMenuOpen }"></span>
        <span class="!w-1/2 !translate-x-[13px] !translate-y-[10px] !scale-[1] !rotate-[45deg]" :class="{ '!opacity-0' : !isMenuOpen }"></span>
        <span class="!w-1/2 !-translate-x-[14px] !translate-y-[25px] !scale-[1] !rotate-[45deg]" :class="{ '!opacity-0' : !isMenuOpen }"></span>
        <span class="!w-1/2 !-translate-x-[8px] !translate-y-[47px] !scale-[1] !rotate-[135deg]" :class="{ '!opacity-0' : !isMenuOpen }"></span>
      </div>
    </div>
    <div class="col-span-1 max-lg:hidden flex">
      <div class="w-full h-full bg-cover bg-center bg-no-repeat" style="background-image: url('/img/external/free-palestine-cave-pov-jet.jpg');"></div>
    </div>

    <!-- OVERLAY -->
    <ul ref="overlay-menu" class="nav-menu overflow-invisible" data-lenis-prevent :class="{ '!hidden': store.index.getLayout.main_layout.innerWidth >= 1024 }">
			<li><router-link to="#about-me" class="anim-multi-underline" :style="$route.hash == '#about-me' ? 'background-size: 100% 2px; background-position-x: left;' : ''">{{ $t('about me') }}</router-link></li>
      <li><router-link to="#portfolio" class="anim-multi-underline" :style="$route.hash == '#portfolio' ? 'background-size: 100% 2px; background-position-x: left;' : ''">{{ $t('portfolio') }}</router-link></li>
      <li><router-link to="#workflow" class="anim-multi-underline" :style="$route.hash == '#workflow' ? 'background-size: 100% 2px; background-position-x: left;' : ''">{{ $t('process') }}</router-link></li>
      <li><router-link to="#price" class="anim-multi-underline" :style="$route.hash == '#price' ? 'background-size: 100% 2px; background-position-x: left;' : ''">{{ $t('prices') }}</router-link></li>
      <li ref="caret-overlay-lang" id="caret-overlay-lang" @click="toggleOverlayLang">
        <router-link :to="$route.hash" class="anim-multi-underline" :style="isOverlayLangOpen ? 'background-size: 100% 2px; background-position-x: left;' : ''">{{ selectedLang.slice(0, 2) }}&nbsp;<i class="fa-solid fa-caret-down"></i></router-link>
      </li>
      <ul class="nav-overlay-lang grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-4 w-full max-w-3xl -mt-5 mb-5">
        <li v-for="row in languages" :key="row.id" class="opt-overlay-lang opacity-0 -z-10">
          <div class="relative p-4 rounded-sm bg-repeat-round cursor-pointer" :style="`background-image: url('/img/flags/png1000px/${row.flag}.png'); background-position: inherit;`" @click="selectedLang = row.code">
            <div class="absolute inset-0 bg-black transition-all ease-in-out duration-200" :class="selectedLang == row.code ? 'opacity-30' : 'opacity-75'"></div>
            <p class="line-clamp-1">
              <router-link to="" class="anim-multi-underline font-medium text-[10px] xs:text-xs" :style="selectedLang == row.code ? 'background-size: 100% 2px; background-position-x: left;' : ''" @click="selectedLang = row.code">
                {{ row.name }}
              </router-link>
            </p>
          </div>
        </li>
      </ul>
      <li><router-link to="#contact" class="anim-multi-underline" :style="$route.hash == '#contact' ? 'background-size: 100% 2px; background-position-x: left;' : ''">{{ $t('contact') }}</router-link></li>
		</ul>
  </nav>
</template>

<script>
import { useIndexStore } from '@/store/index'

export default {
  setup() {
    const { locale } = useI18n()

    return {
      locale
    }
  },
  data() {
    return {
      store: {
        index: useIndexStore()
      },
      languages: [
        { id: 1, code: 'id', name: 'indonesian', flag: 'id' },
        { id: 2, code: 'en', name: 'english', flag: 'gb' },
        { id: 3, code: 'fr', name: 'french', flag: 'fr' },
        { id: 4, code: 'ar', name: 'arabic', flag: 'sa' },
        { id: 5, code: 'cn', name: 'mandarin', flag: 'cn' },
        { id: 6, code: 'jp', name: 'japanese', flag: 'jp' },
        { id: 7, code: 'kr', name: 'korean', flag: 'kr' },
        { id: 8, code: 'ru', name: 'russian', flag: 'ru' },
        { id: 9, code: 'gr', name: 'greek', flag: 'gr' },
        { id: 10, code: 'es', name: 'spanish', flag: 'es' },
        { id: 11, code: 'tr', name: 'turkish', flag: 'tr' },
        { id: 12, code: 'de', name: 'german', flag: 'de' },
        { id: 13, code: 'it', name: 'italian', flag: 'it' },
        { id: 14, code: 'th', name: 'thai', flag: 'th' },
        { id: 15, code: 'du', name: 'dutch', flag: 'nl' },
        { id: 16, code: 'he', name: 'hebrew', flag: 'il' },
      ],
      social_media: [
        { id: 1, name: 'github', url: 'https://github.com/sychadelite', title: 'github', icon: '<i class="fa-brands fa-github"></i>' },
        { id: 2, name: 'instagram', url: 'https://instagram.com/barjlazuardi', title: 'instagram', icon: '<i class="fa-brands fa-instagram"></i>' },
        { id: 3, name: 'x', url: 'https://x.com/themoltisanti', title: 'instagram', icon: '<i class="fa-brands fa-x-twitter"></i>' },
        { id: 4, name: 'facebook', url: 'https://facebook.com/barjlazuardi', title: 'instagram', icon: '<i class="fa-brands fa-facebook"></i>' },
        { id: 5, name: 'threads', url: 'https://threads.net/barjlazuardi', title: 'instagram', icon: '<i class="fa-brands fa-threads"></i>' },
        { id: 6, name: 'discord', url: 'https://discord.com/users/41767866263312793', title: 'instagram', icon: '<i class="fa-brands fa-discord"></i>' },
        // { id: 7, name: 'pinterest', url: 'https://www.pinterest.com/barjlazuardi/', icon: '<i class="fa-brands fa-pinterest"></i>' },
      ],
      selectedLang: localStorage.getItem('selectedLang') ?? 'en',
      isMenuOpen: false,
      isLangOpen: false,
      isOverlayLangOpen: false,
    }
  },
  watch: {
    isMenuOpen(newStatus) {
      // this.store.index.getLayout.main_layout.scrollerStatus(!newStatus)
    },
    'store.index.getLayout.main_layout.lenis': {
      handler(newVal) {
        if (newVal) {
          const id = this.$route.hash.replace('#', '')
          this.store.index.getLayout.main_layout.lenis.scrollTo(document.getElementById(id), {
            offset: -this.$refs['top-nav'].clientHeight,
            lerp: .2,
            duration: 2,
            lock: true
          })
        }
      },
      immediate: true
    },
    $route: {
      handler(to, from) {
        if (this.isMenuOpen) this.$refs['ham-menu'].click()
        
        const id = to.hash.replace('#', '')
        this.store.index.getLayout.main_layout.lenis.scrollTo(document.getElementById(id), {
          offset: -this.$refs['top-nav'].clientHeight,
          lerp: .2,
          duration: 2,
          lock: true
        })
      }
    },
    selectedLang(newLang) {
      localStorage.setItem('selectedLang', newLang)
      this.locale = newLang
    }
  },
  created() {
    this.$nextTick(() => {
      this.initGsap()
      this.addClickOutsideListener()
    })
  },
  beforeUnmount() {
    this.removeClickOutsideListener()
  },
  methods: {
    initGsap() {
      const { $Lenis, $LocomotiveScroll, $gsap, $ScrollTrigger } = useNuxtApp()

      // Gsap logic
      this.$nextTick(() => {
        const ham = document.querySelector("#ham-menu")
        const menu = document.querySelector('ul.nav-menu')
        const links = menu.querySelectorAll('li:not(.opt-overlay-lang)')

        const links_excl_caret_lang = menu.querySelectorAll('li:not(.opt-overlay-lang, #caret-overlay-lang)')

        const caret_lang = document.querySelector("#caret-lang")
        const lang = document.querySelector('div.dropdown-lang')
        const opts_lang = lang.querySelectorAll('li')
        
        const ov_caret_lang = document.querySelector("#caret-overlay-lang")
        const ov_lang = document.querySelector('ul.nav-overlay-lang')
        const opts_ov_lang = menu.querySelectorAll('li.opt-overlay-lang')
        const opts_ov_lang_reversed = Array.from(menu.querySelectorAll('li.opt-overlay-lang')).reverse()

        const sm_links = document.querySelectorAll('.social-media a')
        
        const topnav_height = this.$refs['top-nav'].clientHeight
        
        // Hamburger -> Menu
        var tl_hamMenu = $gsap.timeline({ paused: true })
        tl_hamMenu.to(menu, {
          duration: 0.75,
          opacity: 1,
          height: `calc(100vh - ${topnav_height}px)`,
          overflow: 'auto',
          zIndex: 10,
          ease: 'expo.inOut',
        })
        tl_hamMenu.from(links, {
          duration: 1,
          opacity: 0,
          y: 20,
          stagger: 0.1,
          ease: 'expo.inOut',
        }, "-=0.5")
        tl_hamMenu.reverse()
        tl_hamMenu.reverse().eventCallback("onReverseComplete", () => {
          menu.classList.add('!hidden')
        })
        ham.addEventListener('click', () => {
          menu.classList.remove('!hidden')
          tl_hamMenu.reversed(!tl_hamMenu.reversed())
        })

        // Caret -> Language
        var tl_caretLang = $gsap.timeline({ paused: true })
        tl_caretLang.to(lang, {
          duration: 1,
          opacity: 1,
          zIndex: 10,
          height: 40 * this.languages.length,
          ease: 'expo.inOut',
        })
        tl_caretLang.from(opts_lang, {
          duration: 1,
          opacity: 0,
          y: 20,
          stagger: 0.1,
          ease: 'expo.inOut',
        }, "-=0.5")
        tl_caretLang.reverse()
        tl_caretLang.reverse().eventCallback("onReverseComplete", () => {
          lang.classList.add('hidden')
        })
        caret_lang.addEventListener('click', () => {
          lang.classList.remove('hidden')
          tl_caretLang.reversed(!tl_caretLang.reversed())
        })

        // Overlay Caret -> Language
        var tl_overlayCaretLang = $gsap.timeline({ paused: true })
        tl_overlayCaretLang.to(ov_lang, {
          duration: 1,
          opacity: 1,
          height: 'fit-content',
          ease: 'expo.inOut',
        }, "-=0.5")
        tl_overlayCaretLang.to(opts_ov_lang, {
          duration: 1,
          opacity: 1,
          zIndex: 10,
          y: 20,
          stagger: 0.1,
          ease: 'expo.inOut'
        }, "-=1")
        tl_overlayCaretLang.reverse()
        tl_overlayCaretLang.reverse().eventCallback("onReverseComplete", () => {
          opts_ov_lang.forEach(el => el.classList.add('hidden'))
          ov_lang.classList.add('hidden')
          // links_excl_caret_lang.forEach(el => el.classList.remove('hidden'))
        })
        ov_caret_lang.addEventListener('click', () => {
          ov_lang.classList.remove('hidden')
          opts_ov_lang.forEach(el => el.classList.remove('hidden'))
          // links_excl_caret_lang.forEach(el => el.classList.add('hidden'))
          tl_overlayCaretLang.reversed(!tl_overlayCaretLang.reversed())
        })
      
        // Reveal -> Social Media
        var tl_socialMedia = $gsap.timeline({ paused: true })
        tl_socialMedia.to(sm_links, {
          duration: .5,
          opacity: 1,
          transition: 'all .3s',
          stagger: 0.3,
          ease: "power4.in",
        }, "-=0.5")
        tl_socialMedia.play()
      })
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    toggleLang() {
      this.isLangOpen = !this.isLangOpen
    },
    toggleOverlayLang() {
      this.isOverlayLangOpen = !this.isOverlayLangOpen
    },
    addClickOutsideListener() {
      document.addEventListener('click', this.handleDocumentClick)
    },
    removeClickOutsideListener() {
      document.removeEventListener('click', this.handleDocumentClick)
    },
    handleDocumentClick(event) {
      if (this.isMenuOpen && !this.$refs['overlay-menu'].contains(event.target) && !this.$refs['ham-menu'].contains(event.target)) {
        if (this.store.index.getLayout.main_layout.innerWidth < 1024)
          document.querySelector('#ham-menu').click()
      }
      if (this.isLangOpen && !this.$refs['dropdown-lang'].contains(event.target) && !this.$refs['caret-lang'].contains(event.target)) {
        if (this.store.index.getLayout.main_layout.innerWidth >= 1024)
          document.querySelector('#caret-lang').click()
      }
      if (this.isOverlayLangOpen && !this.$refs['overlay-menu'].contains(event.target) && !this.$refs['caret-overlay-lang'].contains(event.target)) {
        if (this.store.index.getLayout.main_layout.innerWidth < 1024)
          document.querySelector('#caret-overlay-lang').click()
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.nav-link {
  li {
    a {
      position: relative;

      &.anim-multi-underline {
        background: linear-gradient(0deg, theme('colors.black'), theme('colors.black')) no-repeat right bottom / 0 2px;
        transition: background-size 350ms;
  
        &:where(:hover, :focus-visible) {
          background-size: 100% 2px;
          background-position-x: left;
        }
      }

      &.anim-underline {
        &::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          border-radius: 2px;
          background-color: theme('colors.black');
          bottom: 0;
          left: 0;
          transform-origin: right;
          transform: scaleX(0);
          transition: transform .3s ease-in-out;
        }
  
        &:hover::before {
          transform-origin: left;
          transform: scaleX(1);
        }
      }
    }
  }
}

.nav-menu, .nav-lang {
  position: absolute;
  width: 100%;
  top: 100%;
  left: 0;

  background-color: theme('colors.black');
  color: theme('colors.white');

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 2rem;
  gap: 1rem;

  // for animation
  opacity: 0;
  height: 0;

  li {
    a {
      position: relative;
      margin-top: -20px;

      &.anim-multi-underline {
        background: linear-gradient(0deg, theme('colors.white'), theme('colors.white')) no-repeat right bottom / 0 2px;
        transition: background-size 350ms;
  
        &:where(:hover, :focus-visible) {
          background-size: 100% 2px;
          background-position-x: left;
        }
      }

      &.anim-underline {
        &::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          border-radius: 2px;
          background-color: theme('colors.white');
          bottom: 0;
          left: 0;
          transform-origin: right;
          transform: scaleX(0);
          transition: transform .3s ease-in-out;
        }
  
        &:hover::before {
          transform-origin: left;
          transform: scaleX(1);
        }
      }
    }
  }
}

#ham-menu {
  width: 60px;
  height: 46px;
  position: relative;
  margin: auto;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg) scale(.5);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;

  & span {
    display: block;
    position: absolute;
    height: 9px;
    width: 50%;
    background: theme('colors.black');
    opacity: 1;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
  }

  & span:nth-child(even) {
    left: 50%;
    border-radius: 0 9px 9px 0;
  }

  & span:nth-child(odd) {
    left:0px;
    border-radius: 9px 0 0 9px;
  }

  & span:nth-child(1), & span:nth-child(2) {
    top: 0px;
  }

  & span:nth-child(3), & span:nth-child(4) {
    top: 18px;
  }

  & span:nth-child(5), & span:nth-child(6) {
    top: 36px;
  }

  &.open span:nth-child(1),&.open span:nth-child(6) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  &.open span:nth-child(2),&.open span:nth-child(5) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  &.open span:nth-child(1) {
    left: 5px;
    top: 7px;
  }

  &.open span:nth-child(2) {
    left: calc(50% - 5px);
    top: 7px;
  }

  &.open span:nth-child(3) {
    left: -50%;
    opacity: 0;
  }

  &.open span:nth-child(4) {
    left: 100%;
    opacity: 0;
  }

  &.open span:nth-child(5) {
    left: 5px;
    top: 29px;
  }

  &.open span:nth-child(6) {
    left: calc(50% - 5px);
    top: 29px;
  }
}
</style>