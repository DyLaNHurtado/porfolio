<template>
  <article class="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
    <div class="w-full md:w-1/2">
      <div class="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl" :class="getTechClass(project.technologies[0].name)">
        <img :src="project.image" :alt="project.title" class="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105" loading="lazy">
      </div>
    </div>
    <div class="w-full md:w-1/2 md:max-w-lg">
      <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-100">{{ project.title }}</h3>
      <div class="flex flex-wrap mt-2">
        <ul class="flex flex-row mb-2 gap-x-2">
          <li v-for="tech in project.technologies" :key="tech.name">
            <span :class="getTechClass(tech.name) + ' flex gap-x-2 rounded-full text-xs py-1 px-2 text-white border-2'">
              {{ tech.name }}
            </span>
          </li>
        </ul>
      </div>
      <div class="mt-2 text-gray-700 dark:text-gray-400">{{ project.description }}</div>
      <footer class="flex items-end justify-start mt-4 gap-x-4">
        <a :href="project.codeLink" role="link" class="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-black border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-gray-800">
          <svg
    viewBox="0 0 256 250"
    width="24"
    height="24"
    fill="#fff"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
>
    <path
        d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" />
</svg>
          Code
        </a>
        <a :href="project.previewLink" role="link" class="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-blue-500 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-blue-600 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

          Preview
        </a>
      </footer>
    </div>
  </article>
</template>

<script>
import { defineComponent } from 'vue';
import { techConfig } from '../scripts/techConfig.js';

export default defineComponent({
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getTechClass(techName) {
      const color = techConfig[techName]?.color;
      return ` border-${color} bg-${color} bg-opacity-20` || ' border-gray-700 ';
    },
  },
});
</script>

<style scoped>
.project-card {
  transition: transform 0.3s;
}
.project-card:hover {
  transform: scale(1.05);
}
</style>
