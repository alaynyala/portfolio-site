<template>
  <div class="work-page">
    <iframe src="https://drive.google.com/file/d/1XbAN3qywc0t-Y3PX_Sfk7iCy_eWNz0bj/preview" width="100%" height="100%" allow="autoplay">
    </iframe>
    <div class="work-page-controls">
      <button @click="prevPage">Previous</button>
      <span>{{ currentPage }} / {{ pageCount }}</span>
      <button @click="nextPage">Next</button>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.work-page {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
}

@media (max-width: 450px) {
  .work-page {
    padding: 0;
  }
  .work-page iframe {
    width: 100%;
    height: 100%;
  }
}

</style>
