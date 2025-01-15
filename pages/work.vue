<template>
  <div class="work-page">
    <iframe src="https://drive.google.com/file/d/1XbAN3qywc0t-Y3PX_Sfk7iCy_eWNz0bj/preview" allow="autoplay">
    </iframe>
    <button @click="goBack"><img src="images/arrow-rt.svg" alt="back" />home</button>
    <div class="info">
      <p>
        <span>alaina hunt</span>
        <span>©2025</span>
      </p>
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
p {
  font-family: 'Neue Haas Grotesk Display Pro', Arial, Helvetica, sans-serif;
  font-size: .5em;
  font-weight: 400;
  letter-spacing: -0.02em;
  color: #fff;
}

.info {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
}

@media (max-width: 450px) {
  .work-page {
    padding: 0;
  }
  iframe {
    width: calc(100% - 2rem);
    height: 80vh;
  }
}

</style>
