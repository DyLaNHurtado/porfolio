<template>
    <section id="proyectos" data-section="proyectos" class="section scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl">
      <h2 class="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
        <svg class="size-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24H0z" fill="none"></path>
          <path d="M7 8l-4 4l4 4"></path>
          <path d="M17 8l4 4l-4 4"></path>
          <path d="M14 4l-4 16"></path>
        </svg>
        Proyectos
      </h2>
      <div class="flex flex-col gap-y-16">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </section>
  </template>
  
  <script>
  import ProjectCard from './ProjectCard.vue';
  
  export default {
    name: 'Projects',
    components: {
      ProjectCard,
    },
    data() {
      return {
        projects: [
          {
            id: 1,
            image: 'https://raw.githubusercontent.com/DyLaNHurtado/chat-angular/develop/src/assets/img/logo.png',
            title: 'Cosmos - Aplicación de Chat en tiempo real',
            description: 'Aplicación calificada como sobresaliente en el fin de grado (TFG) de mi curso de DAM (Desarrollo de Aplicaciones Multiplataforma). Creado desde cero con estructura cliente-servidor (Angular, Electron.js, Node.js, MongoDB y más)',
            technologies: [
              { name: 'Angular' },
              { name: 'Node.js' },
            ],
            codeLink: 'https://github.com/pheralb/svgl',
            previewLink: 'https://svgl.vercel.app/',
          },
          {
            id: 2,
            image: '/path/to/project2.jpg',
            title: 'Project 2',
            description: 'Descripción breve del proyecto 2.',
            technologies: [
              { name: 'React' },
              { name: 'Firebase' },
            ],
            codeLink: 'https://github.com/project2',
            previewLink: 'https://project2.vercel.app/',
          },
          {
            id: 3,
            image: '/path/to/project3.jpg',
            title: 'Project 3',
            description: 'Descripción breve del proyecto 3.',
            technologies: [
              { name: 'Vue.js' },
              { name: 'GraphQL' },
            ],
            codeLink: 'https://github.com/project3',
            previewLink: 'https://project3.vercel.app/',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .size-7 {
    width: 24px;
    height: 24px;
  }
  </style>
  