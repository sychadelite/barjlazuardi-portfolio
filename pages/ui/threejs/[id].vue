<template>
  <div>
    <template v-if="pageIsFound">
      <component 
        :is="$convertToCamelCase($route.params.id)" 
        :class="'w-full h-screen m-auto'"
      >
      </component>
    </template>
  </div>
</template>

<script>
import Examples from '@/components/threejs/Examples'
import LittlestTokyo from '@/components/threejs/LittlestTokyo'
import SheenChair from '@/components/threejs/SheenChair'
import Lod from '@/components/threejs/Lod'

export default {
  setup() {
    useHead({
      title: 'Barjlazuardi | UI - ' + useNuxtApp().$convertToCamelCase(this.$route.params.id),
      meta: [
        { name: 'description', content: `My amazing ui threejs ${this.$route.params.id} site.` }
      ],
      bodyAttrs: {
        class: 'ui-threejs-page'
      },
    })
  },
  components: {
    Examples,
    LittlestTokyo,
    SheenChair,
    Lod,
  },
  data() {
    return {
      availableComponents: [
        'examples',
        'littlest-tokyo',
        'sheen-chair',
        'lod',
      ],
      pageIsFound: false,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.checkAvailabilityComponent()
    })
  },
  methods: {
    checkAvailabilityComponent() {
      if (this.availableComponents.includes(this.$route.params.id)) {
        this.pageIsFound = true
      } else {
        this.pageIsFound = false
        showError({ message: 'Page is not found', statusCode: 404 })
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>