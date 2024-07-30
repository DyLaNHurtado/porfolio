<template>
    <PaginatedContent
      title="Projects"
      :items="projects"
      itemComponent="ProjectCard"
    />
  </template>
  
  <script>
  import PaginatedContent from '@/components/PaginatedContent.vue';
  import ProjectCard from '@/components/ProjectCard.vue';
  
  export default {
    components: {
      PaginatedContent,
      ProjectCard
    },
    data() {
      return {
        projects: [
        {
          id: 1,
          imageUrl: 'https://raw.githubusercontent.com/DyLaNHurtado/chat-angular/develop/src/assets/img/logo.png',
          title: 'Cosmos - Aplicación de Chat en tiempo real',
          description: 'Aplicación calificada como sobresaliente en el fin de grado (TFG) de mi curso de DAM (Desarrollo de Aplicaciones Multiplataforma). Creado desde cero con estructura cliente-servidor (Angular, Electron.js, Node.js, MongoDB y más)',
          technologies: [
             'Angular',
             'Node.js',
          ],
          codeLink: 'https://github.com/pheralb/svgl',
          previewLink: 'https://svgl.vercel.app/',
        },
        {
          id: 2,
          imageUrl: '/path/to/project2.jpg',
          title: 'Project 2',
          description: 'Descripción breve del proyecto 2.',
          technologies: [
             'React',
             'Firebase' 
          ],
          codeLink: 'https://github.com/project2',
          previewLink: 'https://project2.vercel.app/',
        },
        {
          id: 3,
          imageUrl: '/path/to/project3.jpg',
          title: 'Project 3',
          description: 'Descripción breve del proyecto 3.',
          tags: [
           'Vue.js',
           'GraphQL' 
          ],
          codeLink: 'https://github.com/project3',
          previewLink: 'https://project3.vercel.app/',
        },
      ],
      };
    },
    created() {
      // Carga tus proyectos desde una API o similar
    }
  };
  </script>
  