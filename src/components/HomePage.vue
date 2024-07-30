<template>
  <div class="mx-auto max-w-6xl">
    <Hero />
    <section class="intro py-12">
      <div class="container mx-auto text-center gap-8 flex flex-col items-center justify-center">
        <Experience />
        <ProjectsPreview />
        <PaginatedArticles />
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Hero from '../components/Hero.vue';
import Experience from '../components/Experience.vue';
import ProjectsPreview from '../components/ProjectsPreview.vue';
import PaginatedArticles from '../components/PaginatedArticles.vue';

export default defineComponent({
  name: 'HomePage',
  components: { Hero, Experience, ProjectsPreview, PaginatedArticles },
});
</script>
