<template>
  <div class="work-page">
    <carousel :autoplay="false" :per-page="1" :scroll-per-page="true" class="pdf-carousel">
      <slide v-for="page in pageCount" :key="page">
        <img :src="getPageImageUrl(page)" class="pdf-page" />
      </slide>
    </carousel>
    <div class="pdf-controls" v-if="pageCount > 1">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>{{ currentPage }} / {{ pageCount }}</span>
      <button @click="nextPage" :disabled="currentPage === pageCount">Next</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Carousel, Slide } from 'vue-carousel'

const pdfUrl = 'https://alainahunt.com/pdfs/alainahunt-selected2025.pdf'
const currentPage = ref(1)
const pageCount = ref(0)

// Function to get the image URL for each page
const getPageImageUrl = (page) => {
  return `https://example.com/path/to/pdf/images/page-${page}.jpg` // Replace with actual image URLs
}

// Simulate loading the PDF and setting the page count
const onDocumentLoaded = (numPages) => {
  pageCount.value = numPages
}

// Navigation functions
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

// Simulate loading the document
onDocumentLoaded(5) // Example: Assume the PDF has 5 pages
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

.pdf-carousel {
  width: 100%;
  height: calc(100vh - 100px);
}

.pdf-page {
  width: 100%;
  height: auto; /* Maintain aspect ratio */
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
</style>
