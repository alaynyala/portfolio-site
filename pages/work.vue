<template>
  <div class="work-page">
    <vue-pdf-embed
      :source="pdfUrl"
      :page="currentPage"
      @loaded="onDocumentLoaded"
      class="pdf-viewer"
    />
    <div class="pdf-controls" v-if="pageCount > 1">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>{{ currentPage }} / {{ pageCount }}</span>
      <button @click="nextPage" :disabled="currentPage === pageCount">Next</button>
    </div>
  </div>
</template>

<script setup>
import VuePdfEmbed from 'vue-pdf-embed'
import { ref } from 'vue'

const pdfUrl = 'https://alainahunt.com/pdfs/alainahunt-selected2025.pdf'
const currentPage = ref(1)
const pageCount = ref(0)

const onDocumentLoaded = (numPages) => {
  pageCount.value = numPages
}

const nextPage = () => {
  if (currentPage.value < pageCount.value) {
    currentPage.value++
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}
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

.pdf-viewer {
  width: 100%;
  height: calc(100vh - 100px);
  max-width: 100%;
}

.pdf-controls {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 1rem;
  padding: 0.5rem;
}

.pdf-controls button {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  background: white;
  border-radius: 4px;
}

.pdf-controls button:disabled {
  opacity: 0.5;
}

@media (max-width: 768px) {
  .work-page {
    padding: 0.5rem;
  }
  
  .pdf-controls {
    position: fixed;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(255, 255, 255, 0.9);
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    width: 90%;
  }
}
</style>
