<template>
    <section id="proyectos" class="section scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl">
      <div class="flex flex-col bg-gray-800 shadow-sm border-l-green-300 border-l-4 mb-14">
        <h1 class="text-3xl  text-bold py-2 px-4 ">📣 Atención:</h1>
      <p class=" text-gray-400 py-2 px-8 text-wrap text-start line-h-2">
        ❤️ - Todos los <span class="text-bold text-white">proyectos son open-source</span> sientete libre si quieres <span class="text-bold text-white">contribuir, modificar o distribuir.</span> <br/>

        💾 - Mis <span class="text-bold text-white">proyectos y últimos movimientos</span> están <a href="https://github.com/DyLaNHurtado" class="text-teal-400 text-bold hover:underline"> en mi pagina de GitHub</a>. <br/>

        👀 - Para <span class="text-bold text-white">ver el proyecto</span> en acción pulsa en <span class="text-bold text-white">"Preview" </span> <br/>
 
        💻 - Para <span class="text-bold text-white">ver el código fuente</span> pulsa en <span class="text-bold text-white">"Code"</span> <br/>

        📜 - Si pulsas en <span class="text-bold text-white">"Docs"</span> podrás ver <span class="text-bold text-white">documentación asociada al proyecto, objetivos, futuras tareas y más.</span> <br/>

      </p>
      </div>
      
      <PaginatedProjects/>
    </section>
  </template>
  
  <script>
  import ProjectCard from './ProjectCard.vue';
  import PaginatedProjects from './PaginatedProjects.vue';
  
  export default {
    name: 'Projects',
    components: {
      ProjectCard,
      PaginatedProjects
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
  .line-h-2{
    line-height: 2;
  }
  </style>
  