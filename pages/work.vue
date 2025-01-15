<template>
  <div class="work-page">
    <VuePdfEmbed
    :source="'https://alainahunt.com/pdfs/alainahunt-selected2025.pdf'"
    :width="100%"
    :height="100vh"
    style="max-width: 100%;"
  />
  </div>
</template>

<script>
import VuePdfEmbed from 'vue-pdf-embed';
export default {
  components: {
    VuePdfEmbed
  },
  name: 'WorkPage'
}
</script>

<style scoped>
.work-page {
  height: 100vh;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  position: relative;
}

object {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: 100vw;
  max-height: 100vh;
}
</style>
