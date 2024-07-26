<template>
  <div class="project-card bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
    <img :src="project.image" alt="Project Image" class="w-full h-48 object-cover" />
    <div class="p-4">
      <h3 class="text-xl font-semibold">{{ project.title }}</h3>
      <p class="mt-2 text-gray-600">{{ project.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>
