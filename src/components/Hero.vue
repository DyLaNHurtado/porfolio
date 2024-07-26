<template>
  <section class="hero relative h-screen bg-cover bg-center flex items-center justify-center text-white" :style="{ backgroundImage: 'url(/path/to/hero-image.jpg)' }">
    <div class="bg-black bg-opacity-50 p-8 rounded-lg text-center">
      <!-- Imagen personal -->
      <img src="/path/to/your-photo.jpg" alt="Dylan Hurtado López" class="w-32 h-32 mx-auto rounded-full border-4 border-white">
      <h1 class="text-5xl md:text-6xl font-bold leading-tight mt-4">Dylan Hurtado López</h1>
      <p class="text-xl md:text-2xl mt-4">👨‍💻 Web Developer | 🎸 Guitarist | 🎨 Tattoo Artist</p>
      <button @click="$router.push('/about')" class="mt-6 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
        Learn More About Me
      </button>
    </div>
    <!-- Icono de flecha y texto "Scroll Down" -->
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center scroll-arrow-container">
      <ArrowDownIcon class="w-8 h-8 text-white animate-bounce" />
      <p class="text-sm mt-2">Scroll Down</p>
    </div>
  </section>
</template>

<script>
import { ArrowDownIcon } from '@heroicons/vue/24/outline';

export default {
  name: 'Hero',
  components: {
    ArrowDownIcon,
  },
}
</script>

<style scoped>

/* Estilos específicos para pantallas pequeñas */
@media (max-width: 1024px) {
  .scroll-arrow-container {
    bottom: 60px;
  }
}
</style>
