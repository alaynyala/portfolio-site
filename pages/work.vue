<template>
  <div class="work-page">
    <object
      :data="'/pdfs/alainahunt-selected2025.pdf'"
      type="application/pdf"
      width="100%"
      height="100%"
    >
      <p>Unable to display PDF file. 
        <a href="/pdfs/alainahunt-selected2025.pdf">Download</a> instead.
      </p>
    </object>
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
