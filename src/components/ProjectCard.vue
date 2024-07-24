<template>
    <div class="project-card bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105">
      <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="text-xl font-bold text-red-500">{{ project.title }}</h3>
        <p class="mt-2 text-gray-600">{{ project.description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      project: Object
    }
  };
  </script>
  