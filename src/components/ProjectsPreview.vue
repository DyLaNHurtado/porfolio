<template>
  <section id="proyectos" data-section="proyectos" class="section scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl">
    <h2 class="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
      <svg class="size-7" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24H0z" fill="none"></path>
        <path d="M7 8l-4 4l4 4"></path>
        <path d="M17 8l4 4l-4 4"></path>
        <path d="M14 4l-4 16"></path>
      </svg>
      Proyectos Destacados
    </h2>
    <div class="flex flex-col gap-y-16">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
    <a href="/projects" class="m-5 inline-flex items-center justify-center gap-2 px-7 py-3 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-yellow-500/80 text-md hover:bg-gray-900 hover:border-gray-700 group max-w-fit hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black ">Ver todos</a>
  </section>
</template>

<script>
import ProjectCard from './ProjectCard.vue';

export default {
  name: 'ProjectsPreview',
  components: {
    ProjectCard,
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
};
</script>

<style scoped>
.size-7 {
  width: 32px;
  height: 32px;
}
</style>
