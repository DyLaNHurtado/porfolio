<template>
    <div>
      <ProjectsView />
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import ProjectsView from '../components/ProjectsView.vue';
  
  export default defineComponent({
    name: 'ProjectsPage',
    components: { ProjectsView },
  });
  </script>
  
  <style>
  /* Estilos opcionales */
  </style>
  