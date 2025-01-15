<template>
  <div class="work-page">
    <iframe
    :src="`https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent('https://alainahunt.com/pdfs/alainahunt-selected2025.pdf')}`"
    width="100%"
    height="100vh"
    style="border: none;"
  ></iframe>
  </div>
</template>

<script>
export default {
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
