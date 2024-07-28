<template>
    <section id="experiencia" data-section="experiencia" class="section scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl">
      <h2 class="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
        <svg class="size-8" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
          <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
          <path d="M12 12l0 .01"></path>
          <path d="M3 13a20 20 0 0 0 18 0"></path>
        </svg>
        Experiencia laboral
      </h2>
      <ol class="relative mt-16">
    <TimelineItem title="Front-end developer" company="SOFTWARE NEMOTEC S.L." date="Octubre 2022 - Actualmente" description="Responsable de mantenimiento de la plataforma, componentes y utilidades para la creación y desarrollo de sus aplicaciones web. Angular y Java con GraphQL."/>
        
      </ol>
    </section>
  </template>
  
  <script>
  import TimelineItem from './TimelineItem.vue';
  export default {
    name: 'Experience',
    components: {
      TimelineItem
    }
  };
  </script>
  