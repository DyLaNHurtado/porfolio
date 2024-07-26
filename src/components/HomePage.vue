<template>
  <div>
    <Hero />
    <section class="intro bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold mb-4">Welcome to My Portfolio</h2>
        <p class="text-lg mb-6">Explore my projects, skills, and more about my journey as a Frontend Developer. Dive in and see what I can do!</p>
        <button @click="$router.push('/contact')" class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
          Get in Touch
        </button>
      </div>
    </section>
    <ProjectsPreview />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Hero from '../components/Hero.vue';
import ProjectsPreview from '../components/ProjectsPreview.vue';

export default defineComponent({
  name: 'HomePage',
  components: { Hero, ProjectsPreview },
});
</script>
