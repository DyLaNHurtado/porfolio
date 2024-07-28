<template>
    <div class="blog-article p-6 rounded-lg shadow-md flex flex-col gap-4 border-2 border-gray-400 border-opacity-10">
      <h1 class="text-xl text-start font-bold text-white">{{ title }}</h1>
      <img :src="imageUrl" alt="Article Image" class="w-full h-96 object-cover rounded-md">
      <div class="flex flex-col gap-2">
        <h4 class="text-md font-semibold text-gray-200 text-ellipsis text-nowrap text-start" >{{ subtitle }}</h4>
        <footer class="flex flex-row align-center justify-start flex-wrap gap-2">
          <div v-if="author" class="flex items-center text-sm text-gray-400 gap-1">
            <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A4 4 0 0112 21a4 4 0 016.879-3.196M15 11a4 4 0 10-8 0 4 4 0 008 0z"></path>
            </svg>
            {{ author }}
          </div>
          <div v-if="date" class="flex items-center text-sm text-gray-400 gap-1">
            <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            {{ date }}
          </div>
          <div v-if="tags && tags.length > 0" class="flex items-center text-sm text-gray-400 gap-1">
            <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 11a5 5 0 11-2.14-9.066 5.077 5.077 0 011.255.315M2.75 13.793l.797.36M4.1 10.576a6.725 6.725 0 014.177-1.42A6.7 6.7 0 0112 10.5a6.7 6.7 0 012.717-.344 6.725 6.725 0 014.177 1.42M21.25 13.793l.797.36M19.9 10.576a6.725 6.725 0 00-4.177-1.42 6.7 6.7 0 00-2.717.344 6.7 6.7 0 00-2.717-.344 6.725 6.725 0 00-4.177 1.42M2.75 13.793v7.507a6.7 6.7 0 003.68 1.753 6.68 6.68 0 004.13-.27 6.68 6.68 0 004.13.27 6.7 6.7 0 003.68-1.753v-7.507M16.5 12.7a1.5 1.5 0 013 0v5.2m-3 0v-5.2m-9 0v5.2m0-5.2a1.5 1.5 0 10-3 0v5.2m3-5.2h.01M5.5 18.2H2.75m19.5 0H18.5m-13-5.2h.01M2.75 18.2H5.5"></path>
            </svg>
            Tags: 
            <span v-for="tag in tags" :key="tag" class="ml-1">{{ tag }}</span>
          </div>
        </footer>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BlogArticle',
    props: {
      title: {
        type: String,
        required: true,
      },
      subtitle: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
      imageUrl: {
        type: String,
        required: true,
      },
      author: {
        type: String,
        required: true,
      },
      tags: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .blog-article {
    transition: scale .3s;

  }

  .blog-article:hover {
    scale: 1.05;
  }
  </style>
  