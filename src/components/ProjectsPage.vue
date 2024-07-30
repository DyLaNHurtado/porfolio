<template>
    <div class="w-full px-5 py-10 flex items-center justify-center md:mt-20 mt-0">
      <Projects />
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import Projects from '../components/Projects.vue';
  
  export default defineComponent({
    name: 'ProjectsPage',
    components: { Projects },
  });
  </script>
  
  <style>
  </style>
  