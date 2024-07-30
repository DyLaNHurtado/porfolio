<template>
    <div class="w-full flex justify-center items-center flex-col gap-6">
      <component class="  w-full h-full  "
        v-for="item in items"
        :key="item.id"
        :is="itemComponent"
        v-bind="item"
      />
    </div>
  </template>
  
  <script>
  import BlogArticle from '@/components/BlogArticle.vue';
  import ProjectCard from '@/components/ProjectCard.vue';
  export default {
    name: 'ItemList',
    props: {
      items: {
        type: Array,
        required: true
      },
      itemComponent: {
        type: String,
        required: true
      }
    },
    components: {
      BlogArticle,
      ProjectCard
    }
  };
  </script>
  
  <style scoped>
  /* Estilos específicos para la lista de ítems */
  </style>
  