<template>
  <div class="work-page">
    <iframe
    :src="`https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent('https://alainahunt.com/pdfs/alainahunt-selected2025.pdf')}`"
    width="100%"
    height="100vh"
    style="border: none;"
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

iframe {
  width: 100%;
  height: auto;
  border: none;
  overflow: hidden;
}

@media (max-width: 768px) {
  iframe {
    
    -webkit-overflow-scrolling: touch;
  }
}
</style>
