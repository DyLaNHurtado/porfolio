<template>
    <div class="mt-24">
      <AboutMe />
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import AboutMe from '../components/AboutMe.vue';
  
  export default defineComponent({
    name: 'AboutPage',
    components: { AboutMe },
  });
  </script>
  
  <style>
  /* Estilos opcionales */
  </style>
  