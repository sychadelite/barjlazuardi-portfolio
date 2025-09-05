<template>
  <div>
    <template v-if="pageIsFound">
      <component :is="$convertToCamelCase($route.params.id)" :class="'w-full h-screen m-auto'" />
    </template>
  </div>
</template>

<script>
import Examples from '@/components/threejs/Examples'
import LittlestTokyo from '@/components/threejs/LittlestTokyo'
import SheenChair from '@/components/threejs/SheenChair'
import Lod from '@/components/threejs/Lod'

export default {
  components: {
    Examples,
    LittlestTokyo,
    SheenChair,
    Lod
  },
  setup() {
    const route = useRoute()

    useHead({
      title: 'Barjlazuardi | UI - ' + useNuxtApp().$convertToCamelCase(route.params.id),
      meta: [
        { name: 'description', content: `My amazing ui threejs ${route.params.id} site.` }
      ],
      bodyAttrs: {
        class: 'ui-threejs-page'
      }
    })
  },
  data() {
    return {
      availableComponents: [
        'examples',
        'littlest-tokyo',
        'sheen-chair',
        'lod'
      ],
      pageIsFound: false
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

<style lang="scss" scoped></style>