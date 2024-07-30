<template>
    <div class="flex justify-center items-center mt-8 gap-3">
      <transition name="fade" mode="out-in">
        <button
          @click="$emit('prevPage')"
          :disabled="currentPage === 1"
          class="px-4 py-2 bg-gray-800 text-white rounded-lg transition-opacity duration-300"
          :class="{ 'opacity-50 cursor-not-allowed': currentPage === 1 }"
        ><</button>
      </transition>
      <div class="flex items-center justify-center gap-3">
        <button
          v-for="page in totalPages"
          :key="page"
          @click="$emit('goToPage', page)"
          :class="['px-4 py-2 rounded-lg transition-colors duration-300', page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-200']"
        >
          {{ page }}
        </button>
      </div>
      <transition name="fade" mode="out-in">
        <button
          @click="$emit('nextPage')"
          :disabled="currentPage === totalPages"
          class="px-4 py-2 bg-gray-800 text-white rounded-lg transition-opacity duration-300"
          :class="{ 'opacity-50 cursor-not-allowed': currentPage >= totalPages }"
        >></button>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PaginationControls',
    props: {
      currentPage: {
        type: Number,
        required: true
      },
      totalPages: {
        type: Number,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos específicos para los controles de paginación */
  </style>
  