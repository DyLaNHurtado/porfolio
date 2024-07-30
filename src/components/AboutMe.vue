<template>
  <section class="about-me py-12 mx-auto max-w-4xl">
    <div class="container mx-auto text-center">
      <div class="tabs flex justify-center mb-8 border-b-2 border-gray-300">
        <button @click="setActiveTab('web')" :class="tabClass('web')" class="tab px-6 py-3">
          <ComputerDesktopIcon class="h-6 w-6 mr-2" />
          <span class="hidden md:inline">Web Developer</span>
        </button>
        <button @click="setActiveTab('tattoo')" :class="tabClass('tattoo')" class="tab px-6 py-3">
          <PaintBrushIcon class="h-6 w-6 mr-2" />
          <span class="hidden md:inline">Tattoo Artist</span>
        </button>
        <button @click="setActiveTab('music')" :class="tabClass('music')" class="tab px-6 py-3">
          <MusicalNoteIcon class="h-6 w-6 mr-2" />
          <span class="hidden md:inline">Musician</span>
        </button>
      </div>
      <transition name="fade" mode="out-in">
        <div v-if="activeTab === 'web'" class="tab-content">
          <img src="/hero.webp" alt="Web Developer Banner" class="w-full h-64 object-cover rounded-lg shadow-lg mb-8">
          <div class="text-left p-8  rounded-lg shadow-lg">
            <h2 class="text-4xl font-semibold mb-4 0">Buenas! soy Dylan Hurtado López</h2>
            <p class="text-lg  mb-6">Soy un desarrollador web apasionado con más de 10 años de experiencia en la creación de aplicaciones web innovadoras y funcionales. Mi misión es transformar ideas en productos digitales excepcionales.</p>
            <h4 class="text-2xl font-semibold mb-4">Experiencia laboral</h4>
            <ul class="list-disc list-inside mb-6 text-lg">
              <li class="mb-2"><strong>Creador de Contenido</strong> - Twitch</li>
              <li class="mb-2"><strong>Principal Frontend Engineer</strong> - Adevinta Spain</li>
              <li class="mb-2"><strong>Desarrollador Web Freelance</strong> - Varias empresas</li>
            </ul>
            <h4 class="text-2xl font-semibold mb-4 ">Tecnologías Favoritas</h4>
            <ul class="list-disc list-inside mb-6 text-lg ">
              <li class="mb-2">Vue.js</li>
              <li class="mb-2">React</li>
              <li class="mb-2">Node.js</li>
              <li class="mb-2">GraphQL</li>
              <li class="mb-2">Tailwind CSS</li>
            </ul>
            <p class="text-lg ">Contáctame en <a href="https://www.linkedin.com" target="_blank" class="text-blue-600 hover:underline">LinkedIn</a></p>
          </div>
          <div class="projects mt-12">
            <h4 class="text-3xl text-start font-semibold mb-8 ">Proyectos Destacados</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="project-card  rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105">
                <img src="/path/to/project1.jpg" alt="Project 1" class="w-full h-48 object-cover">
                <div class="p-6">
                  <h5 class="text-2xl font-bold mb-2">Project 1</h5>
                  <div class="flex flex-wrap gap-2 mb-4">
                    <span class="chip text-blue-800"><i class="fab fa-react"></i> React</span>
                    <span class="chip  text-green-800"><i class="fab fa-node-js"></i> Node.js</span>
                  </div>
                  <p class="text-gray-700 mb-4">Descripción breve del proyecto 1, destacando las tecnologías y características clave.</p>
                  <div class="flex gap-4">
                    <a href="#" class="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center gap-2"><i class="fab fa-github"></i> Code</a>
                    <a href="#" class="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"><i class="fas fa-eye"></i> Preview</a>
                  </div>
                </div>
              </div>
              <!-- Más proyectos -->
            </div>
          </div>
        </div>
      </transition>
      <transition name="fade" mode="out-in">
        <div v-if="activeTab === 'tattoo'" class="tab-content">
          <img src="/path/to/tattoo-hero.jpg" alt="Tattoo Artist Banner" class="w-full h-64 object-cover rounded-lg shadow-lg mb-8">
          <div class="text-left p-8  rounded-lg shadow-lg">
            <h3 class="text-3xl font-semibold mb-4 ">Soy Dylan Hurtado López</h3>
            <p class="text-lg  mb-6">Soy un artista del tatuaje con más de 10 años de experiencia, dedicado a crear obras de arte únicas y significativas en la piel. Mi pasión por el arte del tatuaje me ha llevado a fundar Delaitto Tattoo, donde cada diseño es una expresión de creatividad y profesionalismo.</p>
            <h4 class="text-2xl font-semibold mb-4 ">Proyectos y Logros</h4>
            <ul class="list-disc list-inside mb-6 text-lg ">
              <li class="mb-2"><strong>Fundador</strong> - Delaitto Tattoo</li>
              <li class="mb-2"><strong>Artista Invitado</strong> - Varios estudios de tatuaje internacionales</li>
            </ul>
            <p class="text-lg ">Visita mi estudio: <a href="https://delaittotattoo.com" target="_blank" class="text-blue-600 hover:underline">delaittotattoo.com</a></p>
          </div>
          <div class="projects mt-12">
            <h4 class="text-3xl font-semibold mb-8">Galería de Tatuajes</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="project-card bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105">
                <img src="/path/to/tattoo-project1.jpg" alt="Tattoo Project 1" class="w-full h-48 object-cover">
                <div class="p-6">
                  <h5 class="text-2xl font-bold mb-2">Tattoo Project 1</h5>
                  <div class="flex flex-wrap gap-2 mb-4">
                    <span class="chip bg-red-100 text-red-800"><i class="fas fa-tattoo"></i> Design</span>
                    <span class="chip bg-green-100 text-green-800"><i class="fas fa-paint-brush"></i> Custom Art</span>
                  </div>
                  <p class="text-gray-700 mb-4">Descripción breve del proyecto de tatuaje 1, destacando el diseño y el estilo artístico.</p>
                </div>
              </div>
              <!-- Más proyectos -->
            </div>
          </div>
        </div>
      </transition>
      <transition name="fade" mode="out-in">
        <div v-if="activeTab === 'music'" class="tab-content">
          <img src="/path/to/music-hero.jpg" alt="Musician Banner" class="w-full h-64 object-cover rounded-lg shadow-lg mb-8">
          <div class="text-left p-8 bg-gray-50 rounded-lg shadow-lg">
            <h3 class="text-3xl font-semibold mb-4 ">Soy Dylan Hurtado López</h3>
            <p class="text-lg  mb-6">Soy un guitarrista apasionado con experiencia en presentaciones en vivo y grabaciones de estudio. Mi objetivo es compartir mi música con el mundo y crear experiencias musicales inolvidables.</p>
            <h4 class="text-2xl font-semibold mb-4 ">Experiencia Musical</h4>
            <ul class="list-disc list-inside mb-6 text-lg text-gray-700">
              <li class="mb-2"><strong>Conciertos en Vivo</strong> - Varios eventos y festivales</li>
              <li class="mb-2"><strong>Grabaciones de Estudio</strong> - Colaboraciones y proyectos personales</li>
            </ul>
            <p class="text-lg ">Mira mis videos en <a href="https://www.youtube.com" target="_blank" class="text-blue-600 hover:underline">YouTube</a></p>
          </div>
          <div class="projects mt-12">
            <h4 class="text-3xl font-semibold mb-8">Proyectos Musicales</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="project-card bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105">
                <img src="/path/to/music-project1.jpg" alt="Music Project 1" class="w-full h-48 object-cover">
                <div class="p-6">
                  <h5 class="text-2xl font-bold mb-2">Music Project 1</h5>
                  <div class="flex flex-wrap gap-2 mb-4">
                    <span class="chip bg-yellow-100 text-yellow-800"><i class="fas fa-music"></i> Composition</span>
                    <span class="chip bg-purple-100 text-purple-800"><i class="fas fa-guitar"></i> Performance</span>
                  </div>
                  <p class="text-gray-700 mb-4">Descripción breve del proyecto musical 1, destacando la composición y la interpretación.</p>
                </div>
              </div>
              <!-- Más proyectos -->
            </div>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
import { ComputerDesktopIcon, MusicalNoteIcon, PaintBrushIcon } from '@heroicons/vue/24/solid';

export default {
  data() {
    return {
      activeTab: 'web',
    };
  },
  components: {
    ComputerDesktopIcon,
    MusicalNoteIcon,
    PaintBrushIcon,
  },
  methods: {
    tabClass(tab) {
      return this.activeTab === tab ? 'bg-red-500 text-white flex items-center text-bold space-x-2 rounded-t-lg' : 'bg-gray-900 bg-opacity-60  text-white hover:bg-gray-600 flex items-center space-x-2 rounded-t-lg';
    },
    setActiveTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>

<style scoped>
.tab {
  margin: 0 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  border: 4px solid transparent;
}

.tab-content {
  width: 100%;
  transition: opacity 0.5s ease-in-out;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.chip {
  padding: 2px 8px;
  border-radius: 9999px;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 4px;
}
h2, h3, h4, h5 {
  padding: 5px 30px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-left: 5px solid #6bdda4
}
</style>
