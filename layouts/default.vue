<template>
  <div class="layout">
    <main class="page-content">
      <slot />
    </main>
  </div>
</template>

<script>
export default {
  setup() {

  }
}
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* full screen height */
}
.page-content {
  flex: 1; /* push footer down */
}
</style>