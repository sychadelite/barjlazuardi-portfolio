<template>
  <div id="component-skills" class="relative">
    <template v-if="shadeIsReady">
      <div class="absolute top-0 right-0 h-full w-9 bg-gradient-to-l from-[#b9b3a9] via-[#b9b3a9] to-transparent z-10 border-r-2 border-[#b9b3a9] sm:translate-x-1"></div>
      <div class="absolute top-0 left-0 h-full w-9 bg-gradient-to-r from-[#b9b3a9] via-[#b9b3a9] to-transparent z-10 border-l-2 border-[#b9b3a9] sm:-translate-x-1"></div>
    </template>
    <div class="tag-list w-full h-full mx-auto">
      <marquee v-for="(_, i) in rows" :key="i" class="loop-slider" :direction="i % 2 == 0 ? 'left' : 'right'"
        :scrollamount="randomDuration(i)" onmouseover="this.stop();" onmouseout="this.start();">
        <div class="inner">
          <div v-for="tag in getRandomTags()" :key="tag" class="tag">
            <span>#</span> {{ tag }}
          </div>
        </div>
      </marquee>
    </div>
  </div>
</template>

<script>
const TAGS = ['HTML', 'CSS', 'JavaScript', 'Typescript', 'Tailwind', 'Vue', 'Nuxt.js', 'ASP.NET', 'UI/UX', 'SVG', 'animation', 'webdev', 'C#', 'PHP', 'Python', 'MVC', 'HMVC', 'Codeigniter', 'Laravel', 'Nodejs', 'Vuetify', 'Bootstrap', 'SCSS', 'Pinia', 'Three.js', 'Gsap', 'Lenis'];
const DURATION = 15000;
const ROWS = 5;
const TAGS_PER_ROW = 5;

export default {
  components: {
    marquee: 'marquee'
  },
  data() {
    return {
      rows: 5,
      tags: TAGS,
      duration: DURATION,
      tagsPerRow: TAGS_PER_ROW,

      shadeIsReady: false
    };
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.shadeIsReady = true
      }, 300)
    })
  },
  methods: {
    random(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
    randomDuration(int) {
      const index = int + 1
      return this.random(this.duration - 5000, this.duration + 5000) / 2500;
    },
    shuffle(arr) {
      return [...arr].sort(() => 0.5 - Math.random());
    },
    getRandomTags() {
      return this.shuffle(this.tags).slice(0, this.tagsPerRow);
    }
  },
};
</script>

<style lang="scss" scoped>
#component-skills {
  font-family: 'Montserrat', sans-serif;
  color: #f8fafc;

  .tag-list {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    flex-direction: column;
    // gap: 1rem 0;
    position: relative;
    padding: 1.5rem 0;
    overflow: hidden;
  }

  .loop-slider {
    padding: 0.5rem 0;

    .inner {
      display: flex;
      align-items: center;
      width: fit-content;
    }
  }

  .tag {
    display: flex;
    align-items: center;
    gap: 0 0.2rem;
    color: #e2e8f0;
    font-size: 0.9rem;
    // background-color: #334155;
    background-color: #111;
    border-radius: 0.4rem;
    padding: 0.7rem 1rem;
    margin-right: 1rem;
    box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.2), 0 0.1rem 0.5rem rgba(0, 0, 0, 0.3), 0 0.2rem .25rem rgba(0, 0, 0, 0.4);
  }

  .tag span {
    font-size: 1.2rem;
    color: #b9b3a9;
  }

  marquee {
    cursor: pointer;
  }
}
</style>
