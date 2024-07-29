<template>
    <div>
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
  