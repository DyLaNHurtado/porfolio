<template>
  <section class="hero relative h-screen bg-cover bg-center flex items-center justify-center text-white backdrop-blur bg-opacity-40 shadow-sm" >
    <div class="flex flex-col justify-center items-center p-8 text-center ">
      <img src="/dylan_photo.webp" alt="Foto de Dylan Hurtado López" class="w-48 h-48 mx-auto rounded-full border-4 border-white">
      <h1 class="text-5xl md:text-6xl font-bold leading-tight mt-4 gradient-text">Dylan Hurtado López</h1>
      <p class="text-xl md:text-2xl mt-4">👨‍💻 Web Developer | 🎸 Guitarist | 🎨 Tattoo Artist</p>
      <p class="text-gray-400 m-2 ">
        <br/>
        +{{ new Date().getFullYear() - 2022 }} años de experiencia de desarrollo web y diseños de interfaces únicas. <br/>
        Apasionado de la tecnologia, la musica y el arte.<br/>
        Ubicado en la ciudad de Leganés, Madrid (España) <br/>
      </p>

<nav class="flex flex-wrap gap-4 mt-8">       <a href="mailto:dylanhurtado43@gmail.com" target="_blank" rel="noopener noreferrer" role="link" class="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-yellow-500/80 text-md hover:bg-gray-900 hover:border-gray-700 group max-w-fit hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"> <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path><path d="M3 6l9 6l9 -6"></path><path d="M15 18h6"></path><path d="M18 15l3 3l-3 3"></path></svg>
Contáctame
</a><a href="https://linkedin.com/in/dylan-hurtado" target="_blank" rel="noopener noreferrer" role="link" class="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-yellow-500/80 text-md hover:bg-gray-900 hover:border-gray-700 group max-w-fit hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"> <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>
LinkedIn
</a><a href="/about" rel="noopener noreferrer" role="link" class="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-yellow-500/80 text-md hover:bg-gray-900 hover:border-gray-700 group max-w-fit hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"> <svg clas="size-4" width="15" height="15" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><g id="SVGRepo_bgCarrier" stroke-width="2" stroke="currentColor" fill="none" ></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" fill="none"></g><g id="SVGRepo_iconCarrier"><path d="M4,20H16V15a1,1,0,0,1,2,0v6a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V15a1,1,0,0,1,2,0Zm5-8v4a1,1,0,0,0,2,0V12a5.006,5.006,0,0,1,5-5h2.683L17.444,8.314A1,1,0,1,0,18.9,9.686l2.808-2.978v0l.02-.02a1.026,1.026,0,0,0,.088-.14.928.928,0,0,0,.108-.171.993.993,0,0,0,0-.75.948.948,0,0,0-.108-.171,1.026,1.026,0,0,0-.088-.14l-.02-.02v0L18.9,2.314a1,1,0,1,0-1.455,1.372L18.683,5H16A7.009,7.009,0,0,0,9,12Z"></path></g></svg>
Más sobre mi
</a>  </nav>
    </div>
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center scroll-arrow-container">
      <ArrowDownIcon class="w-8 h-8 text-white animate-bounce" />
      <p class="text-sm">Scroll Down</p>
    </div>
  </section>
</template>

<script>
import { ArrowDownIcon } from '@heroicons/vue/24/outline';

export default {
  name: 'Hero',
  components: {
    ArrowDownIcon,
  },
}
</script>

<style scoped>
.hero {
  background-size: cover;
  background-attachment: fixed;
}

.gradient-text {
  text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #00cfff 0%,
    #00eeff 20%,
    #00ff8f 40%,
    #66ff00 60%,
    #ffd900 80%,
    #00cfff 100%
  );
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}

@media (max-width: 1024px) {
  .scroll-arrow-container {
    bottom: 60px;
  }
}
</style>
