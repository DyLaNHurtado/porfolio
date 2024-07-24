<template>
    <section class="hero h-screen bg-cover bg-center flex items-center justify-center text-white" style="background-image: url('/path/to/hero-image.jpg');">
      <div class="text-center">
        <h1 class="text-6xl font-bold">Dylan Hurtado López</h1>
        <p class="text-2xl mt-4">Frontend Developer | Guitarist | Tattoo Artist</p>
        <button @click="$router.push('/about')" class="mt-6 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Learn More About Me</button>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Hero',
  };
  </script>
  