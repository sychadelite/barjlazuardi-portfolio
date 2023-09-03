<template>
  <div>
    <div id="flashlight" ref="flashlight" class="z-[9999]"></div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const flashlight = ref(null)

    const init = () => {
      document.addEventListener('mousemove', mousemove)
      // document.addEventListener('touchmove', touchmove)
    }

    const finish = () => {
      document.removeEventListener('mousemove', mousemove)
      // document.removeEventListener('touchmove', touchmove)
    }

    const mousemove = (event) => {
      const mouse_x = event.clientX;
      const mouse_y = event.clientY;
      status = `x = ${mouse_x}, y = ${mouse_y}`;

      const fl = flashlight.value;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const distanceToCenter = Math.sqrt((mouse_x - centerX) ** 2 + (mouse_y - centerY) ** 2);

      const maxDistance = Math.sqrt(centerX ** 2 + centerY ** 2);
      // const scale = 1 - distanceToCenter / maxDistance;
      const scale = 1;

      fl.style.transform = `translate(calc(${mouse_x}px - 50vw), calc(${mouse_y}px - 50vh)) scale(${scale})`;

      // The rest of your logic here...
    }

    const touchmove = (event) => {
      if (event.touches.length > 0) {
        const touch_x = event.touches[0].clientX;
        const touch_y = event.touches[0].clientY;

        const fl = flashlight.value;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const distanceToCenter = Math.sqrt((touch_x - centerX) ** 2 + (touch_y - centerY) ** 2);

        const maxDistance = Math.sqrt(centerX ** 2 + centerY ** 2);
        const scale = 1;

        fl.style.transform = `translate(calc(${touch_x}px - 50vw), calc(${touch_y}px - 50vh)) scale(${scale})`;

        // The rest of your logic here...
      }
    }

    onMounted(init)
    onBeforeUnmount(finish)

    return {
      flashlight,
    }
  },
}
</script>

<style scoped lang="scss">
#flashlight {
  position: fixed;
  left: -100%;
  top: -100%;
  height: 300%;
  width: 300%;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(0, 0, 0, 0) 5%,
    rgba(0, 0, 0, 0.98) 12%
  );
  /* comment that to see all screen */
  filter: blur(3rem);
  transition: left 0.5s ease-in-out, top 0.5s ease-in-out, height 0.5s ease-in-out, width 0.5s ease-in-out;
  pointer-events: none;
}
</style>
