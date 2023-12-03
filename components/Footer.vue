<template>
  <div class="bg-black text-white font-space-mono pt-12 pb-2">
    <div class="flex flex-col justify-end items-center w-full h-fit min-h-[24rem]">
      <div class="flex flex-col sm:flex-row justify-between items-end w-full h-full px-6 max-sm:gap-6">
        <div class="sm:w-5/12 h-full">
          <NuxtLink to="#contact" class="block mr-auto w-fit h-fit mt-2">
            <p class="text-lg text-start hover:tracking-widest capitalize transition-all ease-in-out duration-200">{{ $t('get in touch') }}</p>
          </NuxtLink>
        </div>
        <div class="max-sm:hidden sm:w-2/12 h-full">
          <button @click="scrollTo('top')" class="border border-white w-14 h-fit p-4 m-auto rounded-full hover:bg-white hover:text-black active:bg-gray-300 transition-all ease-in-out duration-200">
            <i class="fa-solid fa-arrow-up-long"></i>
          </button>
        </div>
        <div class="sm:w-5/12 h-full">
          <NuxtLink to="/" class="block ml-auto w-fit h-fit mt-2">
            <p class="text-lg text-end hover:tracking-widest capitalize transition-all ease-in-out duration-200">{{ $t('privacy policy') }}</p>
          </NuxtLink>
          <NuxtLink to="/ui/parallax" class="block ml-auto w-fit h-fit mt-2">
            <p class="text-lg text-end hover:tracking-widest capitalize transition-all ease-in-out duration-200">example parralax</p>
          </NuxtLink>
        </div>
      </div>
      <div class="sm:hidden w-full h-full mt-10">
        <div class="flex flex-row items-center justify-around gap-4 w-full h-full px-4">
          <div class="border-t border-white w-full"></div>
          <button @click="scrollTo('top')" class="border border-white w-24 h-fit p-4 m-auto rounded-full hover:bg-white hover:text-black active:bg-gray-300 transition-all ease-in-out duration-200">
            <i class="fa-solid fa-arrow-up-long"></i>
          </button>
          <div class="border-t border-white w-full"></div>
        </div>
      </div>
      <div class="w-full mt-12 border-t border-white px-2">
        <p class="text-xs xs:text-sm text-center capitalize">
          {{ $t('built with &#10084; by') }}
          <br>
          <span>mohammad barj lazuardi dindashwara, s.kom</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { useIndexStore } from '@/store'
export default {
  data() {
    return {
      store: {
        index: useIndexStore()
      }
    }
  },
  methods: {
    scrollTo(pos) {
      if (pos == 'top') {
        if (this.$route.hash) {
          this.$router.replace({ hash: '' })
        }
      }
      this.store.index.getLayout.main_layout.lenis.scrollTo(pos)
    }
  }
}
</script>