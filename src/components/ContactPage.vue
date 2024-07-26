<template>
    <div>
      <ContactView />
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import ContactView from '../components/ContactView.vue';
  
  export default defineComponent({
    name: 'ContactPage',
    components: { ContactView },
  });
  </script>
  
  <style>
  /* Estilos opcionales */
  </style>
  