<template>
  <!-- <button class="fixed bottom-0 right-0 m-5  p-3 bg-gray-400 hover:bg-gray-300 text-sm text-black font-semibold rounded-full z-[70]" @click.prevent="toggleLight">
    {{ isOn ? 'ON' : 'OFF' }}
  </button> -->
  <div class="flashlight fixed bottom-0 right-0 w-10 sm:w-14 h-10 sm:h-14 rounded-full cursor-pointer m-5 z-[70]" :class="{ 'on' : isOn }" @click="toggleLight"></div>
</template>

<script>
export default {
  props: {
    isOn: {
      type: Boolean,
      default: false
    },
  },
  emits: [
    'callback'
  ],
  methods: {
    toggleLight(e) {
      e.target.classList.toggle("on")
      this.$emit('callback', this.isOn)
    }
  }
}
</script>

<style lang="scss" scoped>
/*はじめに設定しておくクラス*/
.flashlight {
  /*切り替えるプロパティ*/
  background-color: black;
  box-shadow: 1px 1px 20px 10px gray;
  transition: box-shadow 1s;

  /*追加または削除するクラス*/
  &.on {
    background-color: #ffff99;
    box-shadow: 1px 1px 100px 10px #ffffb3;
  }
}
</style>