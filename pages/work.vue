<template>
  <div class="work-page">
    <iframe
      :src="`https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent('https://alainahunt.com/pdfs/alainahunt-selected2025.pdf')}&zoom=page-fit&pagemode=thumbs`"
      class="pdf-viewer"
      allow="fullscreen"
    />
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
  overflow: hidden;
  position: fixed; /* Prevents bouncing on iOS */
  top: 0;
  left: 0;
}

.pdf-viewer {
  width: 100%;
  height: 100%;
  border: none;
  overflow: hidden;
  background: #fff; /* Prevents flash of white */
}

@media (max-width: 768px) {
  .pdf-viewer {
    height: 100%; /* Full height on mobile */
    -webkit-overflow-scrolling: touch;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>
