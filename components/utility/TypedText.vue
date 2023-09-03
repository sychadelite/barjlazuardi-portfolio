<template>
  <div class="typing-animation">
    <div :id="`typed-output-${id}`"></div>
  </div>
</template>

<script>
import Typed from 'typed.js';

export default {
  props: [
    'id',
    'options'
  ],
  mounted() {
    const options = {
      strings: this.options,
      typeSpeed: 90,       // Typing speed in milliseconds
      backSpeed: 45,       // Backspacing speed in milliseconds
      startDelay: 500,     // Delay before typing starts in milliseconds
      backDelay: 1000,     // Delay before backspacing starts in milliseconds
      loop: true,          // Whether to loop the animation
      showCursor: true,    // Whether to display the blinking cursor
    };

    this.typed = new Typed(`#typed-output-${this.id}`, options);
  },
  beforeDestroy() {
    this.typed.destroy();
  },
};
</script>

<style scoped>
.typing-animation {
  display: flex;
  font-size: 18px;
  padding: 20px;
}
</style>