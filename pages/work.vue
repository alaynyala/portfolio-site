<template>
  <div class="work-page">
    <iframe src="https://drive.google.com/file/d/1XbAN3qywc0t-Y3PX_Sfk7iCy_eWNz0bj/preview" allow="autoplay">
    </iframe>
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
  padding: 0rem .75rem;
  border-radius: 1rem;
}

.work-page iframe {
  width: calc(100% - 1rem);
  height: 96vh;
  border-radius: 12px;
}

@media (max-width: 450px) {
  .work-page {
    padding: 1rem 0;
  }
  iframe {
    width: calc(100% - 1rem);
    height: 96vh;
    border-radius: 12px;
  }
 
}

</style>
