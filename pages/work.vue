<template>
  <div class="work-page">
    <iframe
      :src="`https://docs.google.com/viewer?url=${encodeURIComponent('https://alainahunt.com/pdfs/alainahunt-selected2025.pdf')}&embedded=true`"
      class="pdf-viewer"
      frameborder="0"
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
  position: fixed;
  top: 0;
  left: 0;
}

.pdf-viewer {
  width: 100%;
  height: 100%;
  border: none;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

@media (max-width: 768px) {
  .work-page {
    position: relative;
    overflow: visible;
  }
  
  .pdf-viewer {
    min-height: 100vh;
    width: 100%;
  }
}
</style>
