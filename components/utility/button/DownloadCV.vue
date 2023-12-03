<template>
  <div class="fixed bottom-0 left-5 rounded-full cursor-pointer mb-5 font-space-mono z-[70]">
    <div id="glowing-button-download-cv" :class="isGlowing ? 'opacity-100' : 'opacity-0'"></div>
    <a href="/documents/Barj CV - Grey & White Minimalist Resume.pdf" download="">
      <button class="pulse-button" @mouseover="isGlowing = true" @mouseout="isGlowing = false">
        <small class="mr-2 max-xs:text-xs">Download CV</small>
        <i class="fa-solid fa-file-arrow-down"></i>
      </button>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isGlowing: false
    }
  }
}
</script>

<style lang="scss" scoped>
#glowing-button-download-cv {
  position: absolute;
  top: -3rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 160px;
  height: 160px;
  transition: all 1s ease;
  pointer-events: none;
  z-index: -1;
  border-radius: 9999px;
  background-image: linear-gradient(45deg,#00dc82,#36e4da,#0047e1);
  filter: blur(60px);
}

.pulse-button {
  position: relative;
  width: fit-content;
  height: fit-content;
  padding: 8px 16px;
  border: none;
  box-shadow: 0 0 0 0 #111111;
  border-radius: 20px;
  color: white;
  background-color: #111111;
  background-size: 60%;
  background-position: -5px -5px;
  background-repeat: no-repeat;
  cursor: pointer;
  animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  transition: all .3s cubic-bezier(0.55, 0.055, 0.675, 0.19);

  &:hover {
    animation: none;
    background-color: #212121;
  }

  @keyframes pulse {
    to {
      box-shadow: 0 0 0 .5rem rgba(232, 76, 61, 0);
    }
  }
}
</style>