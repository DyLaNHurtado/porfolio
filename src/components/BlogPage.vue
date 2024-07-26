<template>
    <div>
      <BlogView />
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import BlogView from '../components/BlogView.vue';
  
  export default defineComponent({
    name: 'BlogPage',
    components: { BlogView },
  });
  </script>
  
  <style>
  /* Estilos opcionales */
  </style>
  