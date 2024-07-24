<template>
    <section class="projects-preview py-8 bg-gray-100">
      <h2 class="text-3xl font-bold text-center">Featured Projects</h2>
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>
    </section>
  </template>
  
  <script>
  import ProjectCard from './ProjectCard.vue';
  
  export default {
    components: {
      ProjectCard
    },
    data() {
      return {
        projects: [
          { id: 1, image: '/path/to/project1.jpg', title: 'Project 1', description: 'Description for project 1' },
          { id: 2, image: '/path/to/project2.jpg', title: 'Project 2', description: 'Description for project 2' },
          { id: 3, image: '/path/to/project3.jpg', title: 'Project 3', description: 'Description for project 3' }
        ]
      };
    }
  };
  </script>
  