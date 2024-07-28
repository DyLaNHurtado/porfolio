<template>
  <section class="about-me py-12 mx-auto max-w-6xl">
    <div class="container mx-auto text-center">
      <h2 class="text-4xl font-bold mb-8">About</h2>
      <div class="tabs flex justify-center mb-8 border-b-2 py-5 border-b-red-500">
        <button @click="setActiveTab('web')" :class="tabClass('web')" class="tab">
          <ComputerDesktopIcon class="h-5 w-5 icon" />
          <span v-if="activeTab === 'web'">Web Developer</span>
        </button>
        <button @click="setActiveTab('tattoo')" :class="tabClass('tattoo')" class="tab">
          <PaintBrushIcon class="h-5 w-5 icon" />
          <span v-if="activeTab === 'tattoo'">Tattoo Artist</span>
        </button>
        <button @click="setActiveTab('music')" :class="tabClass('music')" class="tab">
          <MusicalNoteIcon class="h-5 w-5 icon" />
          <span v-if="activeTab === 'music'">Musician</span>
        </button>
      </div>
      <transition name="fade" mode="out-in">
        <div v-if="activeTab === 'web'" class="tab-content flex flex-col items-center gap-8">
          <img src="/hero.webp" alt="Web Developer Banner" class="w-full h-64 object-cover rounded-lg shadow-lg">
          <div class="text-left p-6 bg-gray-700 bg-opacity-75 rounded-lg shadow-lg">
            <p class="mb-4 text-white">Hey, soy Dylan Hurtado López. Tengo más de 15 años de experiencia como Ingeniero de Software y Creador de Contenido sobre Programación. Me especializo en el desarrollo de aplicaciones web únicas.</p>
            <h3 class="text-2xl font-semibold mb-2 text-white">Experiencia laboral</h3>
            <ul class="list-disc list-inside mb-4 text-white">
              <li class="mb-2"><strong>Creador de Contenido</strong> - Twitch</li>
              <li><strong>Principal Frontend Engineer</strong> - Adevinta Spain</li>
            </ul>
            <p class="text-white">Contáctame en <a href="https://www.linkedin.com" target="_blank" class="text-red-500 hover:underline">LinkedIn</a></p>
          </div>
          <div class="projects flex flex-col gap-y-16">
            <div class="project-card flex items-center gap-4 p-4 bg-white rounded-lg shadow-lg hover:scale-105 transform transition">
              <img src="/path/to/project1.jpg" alt="Project 1" class="w-32 h-32 object-cover rounded-lg">
              <div>
                <h3 class="text-xl font-bold">Project 1</h3>
                <div class="flex flex-wrap gap-2 mb-2">
                  <span class="chip bg-blue-100 text-blue-800"><i class="fab fa-react"></i> React</span>
                  <span class="chip bg-green-100 text-green-800"><i class="fab fa-node-js"></i> Node.js</span>
                </div>
                <p class="text-gray-600">Descripción breve del proyecto 1.</p>
                <div class="flex gap-2 mt-2">
                  <a href="#" class="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center gap-1"><i class="fab fa-github"></i> Code</a>
                  <a href="#" class="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-1"><i class="fas fa-eye"></i> Preview</a>
                </div>
              </div>
            </div>
            <div class="project-card flex items-center gap-4 p-4 bg-white rounded-lg shadow-lg hover:scale-105 transform transition">
              <img src="/path/to/project2.jpg" alt="Project 2" class="w-32 h-32 object-cover rounded-lg">
              <div>
                <h3 class="text-xl font-bold">Project 2</h3>
                <div class="flex flex-wrap gap-2 mb-2">
                  <span class="chip bg-blue-100 text-blue-800"><i class="fab fa-react"></i> React</span>
                  <span class="chip bg-green-100 text-green-800"><i class="fab fa-node-js"></i> Node.js</span>
                </div>
                <p class="text-gray-600">Descripción breve del proyecto 2.</p>
                <div class="flex gap-2 mt-2">
                  <a href="#" class="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center gap-1"><i class="fab fa-github"></i> Code</a>
                  <a href="#" class="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-1"><i class="fas fa-eye"></i> Preview</a>
                </div>
              </div>
            </div>
            <div class="project-card flex items-center gap-4 p-4 bg-white rounded-lg shadow-lg hover:scale-105 transform transition">
              <img src="/path/to/project3.jpg" alt="Project 3" class="w-32 h-32 object-cover rounded-lg">
              <div>
                <h3 class="text-xl font-bold">Project 3</h3>
                <div class="flex flex-wrap gap-2 mb-2">
                  <span class="chip bg-blue-100 text-blue-800"><i class="fab fa-react"></i> React</span>
                  <span class="chip bg-green-100 text-green-800"><i class="fab fa-node-js"></i> Node.js</span>
                </div>
                <p class="text-gray-600">Descripción breve del proyecto 3.</p>
                <div class="flex gap-2 mt-2">
                  <a href="#" class="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center gap-1"><i class="fab fa-github"></i> Code</a>
                  <a href="#" class="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-1"><i class="fas fa-eye"></i> Preview</a>
                </div>
              </div>
            </div>
          </div>
          <div class="text-left p-6 bg-gray-700 bg-opacity-75 rounded-lg shadow-lg mt-8">
            <h3 class="text-2xl font-semibold mb-2 text-white">Sobre Mí</h3>
            <p class="text-white">Me llamo Dylan Hurtado López, pero mis amigos me llaman Dylan. Empecé en la programación con un Amstrad cuando tenía 10 años. Actualmente estoy liderando equipos de desarrollo en multinacionales. Algunos de mis éxitos incluyen colaborar con Mozilla para el desarrollo de las primeras apps en su sistema FirefoxOS. Aunque hoy está desaparecido fue un gran avance en el mundo del desarrollo web. Como creador de contenido, cuento con el canal de habla hispana más visto del mundo en la categoría de Software & Game Development en Twitch. Mi objetivo es mejorar la empleabilidad de la comunidad hispana y el acceso a contenido de calidad.</p>
          </div>
        </div>
      </transition>
      <transition name="fade" mode="out-in">
        <div v-if="activeTab === 'tattoo'" class="tab-content flex flex-col items-center gap-8">
          <img src="/hero.webp" alt="Tattoo Artist Banner" class="w-full h-64 object-cover rounded-lg shadow-lg">
          <div class="text-left p-6 bg-gray-700 bg-opacity-75 rounded-lg shadow-lg">
            <p class="mb-4 text-white">Soy Dylan Hurtado López, un apasionado del arte del tatuaje. Fundé Delaitto Tattoo y tengo más de 10 años de experiencia creando obras de arte únicas en la piel.</p>
            <h3 class="text-2xl font-semibold mb-2 text-white">Proyectos</h3>
            <ul class="list-disc list-inside mb-4 text-white">
              <li>Estudio independiente - Delaitto Tattoo</li>
            </ul>
            <p class="text-white">Visita mi estudio: <a href="https://delaittotattoo.com" target="_blank" class="text-red-500 hover:underline">delaittotattoo.com</a></p>
          </div>
          <div class="projects grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="project-card flex items-center gap-4 p-4 bg-white rounded-lg shadow-lg hover:scale-105 transform transition">
              <img src="/path/to/tattoo-project1.jpg" alt="Tattoo Project 1" class="w-32 h-32 object-cover rounded-lg">
              <div>
                <h3 class="text-xl font-bold">Tattoo Project 1</h3>
                <div class="flex flex-wrap gap-2 mb-2">
                  <span class="chip bg-red-100 text-red-800"><i class="fas fa-tattoo"></i> Design</span>
                  <span class="chip bg-green-100 text-green-800"><i class="fas fa-paint-brush"></i> Custom Art</span>
                </div>
                <p class="text-gray-600">Descripción breve del proyecto de tatuaje 1.</p>
                <div class="flex gap-2 mt-2">
                  <a href="#" class="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center gap-1"><i class="fab fa-github"></i> Code</a>
                  <a href="#" class="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-1"><i class="fas fa-eye"></i> Preview</a>
                </div>
              </div>
            </div>
            <div class="project-card flex items-center gap-4 p-4 bg-white rounded-lg shadow-lg hover:scale-105 transform transition">
              <img src="/path/to/tattoo-project2.jpg" alt="Tattoo Project 2" class="w-32 h-32 object-cover rounded-lg">
              <div>
                <h3 class="text-xl font-bold">Tattoo Project 2</h3>
                <div class="flex flex-wrap gap-2 mb-2">
                  <span class="chip bg-red-100 text-red-800"><i class="fas fa-tattoo"></i> Design</span>
                  <span class="chip bg-green-100 text-green-800"><i class="fas fa-paint-brush"></i> Custom Art</span>
                </div>
                <p class="text-gray-600">Descripción breve del proyecto de tatuaje 2.</p>
                <div class="flex gap-2 mt-2">
                  <a href="#" class="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center gap-1"><i class="fab fa-github"></i> Code</a>
                  <a href="#" class="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-1"><i class="fas fa-eye"></i> Preview</a>
                </div>
              </div>
            </div>
            <div class="project-card flex items-center gap-4 p-4 bg-white rounded-lg shadow-lg hover:scale-105 transform transition">
              <img src="/path/to/tattoo-project3.jpg" alt="Tattoo Project 3" class="w-32 h-32 object-cover rounded-lg">
              <div>
                <h3 class="text-xl font-bold">Tattoo Project 3</h3>
                <div class="flex flex-wrap gap-2 mb-2">
                  <span class="chip bg-red-100 text-red-800"><i class="fas fa-tattoo"></i> Design</span>
                  <span class="chip bg-green-100 text-green-800"><i class="fas fa-paint-brush"></i> Custom Art</span>
                </div>
                <p class="text-gray-600">Descripción breve del proyecto de tatuaje 3.</p>
                <div class="flex gap-2 mt-2">
                  <a href="#" class="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center gap-1"><i class="fab fa-github"></i> Code</a>
                  <a href="#" class="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-1"><i class="fas fa-eye"></i> Preview</a>
                </div>
              </div>
            </div>
          </div>
          <div class="text-left p-6 bg-gray-700 bg-opacity-75 rounded-lg shadow-lg mt-8">
            <h3 class="text-2xl font-semibold mb-2 text-white">Sobre Mí</h3>
            <p class="text-white">Me llamo Dylan Hurtado López y tengo una pasión profunda por el arte del tatuaje. Desde muy joven, he estado fascinado por el poder del arte corporal para contar historias y expresar identidad. Fundé Delaitto Tattoo para brindar a las personas una experiencia personalizada y única en el arte del tatuaje. Cada diseño es una obra maestra, y me esfuerzo por hacer que cada cliente se sienta especial y valorado.</p>
          </div>
        </div>
      </transition>
      <transition name="fade" mode="out-in">
        <div v-if="activeTab === 'music'" class="tab-content flex flex-col items-center gap-8">
          <img src="/hero.webp" alt="Musician Banner" class="w-full h-64 object-cover rounded-lg shadow-lg">
          <div class="text-left p-6 bg-gray-700 bg-opacity-75 rounded-lg shadow-lg">
            <p class="mb-4 text-white">Soy Dylan Hurtado López, un guitarrista apasionado con experiencia en presentaciones en vivo y grabación de estudio. Mi objetivo es compartir mi música con el mundo.</p>
            <h3 class="text-2xl font-semibold mb-2 text-white">Experiencia Musical</h3>
            <ul class="list-disc list-inside mb-4 text-white">
              <li>Conciertos en vivo</li>
              <li>Grabación de estudio</li>
            </ul>
            <p class="text-white">Mira mis videos en <a href="https://www.youtube.com" target="_blank" class="text-red-500 hover:underline">YouTube</a></p>
          </div>
          <div class="projects grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="project-card flex items-center gap-4 p-4 bg-white rounded-lg shadow-lg hover:scale-105 transform transition">
              <img src="/hero.webp" alt="Music Project 1" class="w-32 h-32 object-cover rounded-lg">
              <div>
                <h3 class="text-xl font-bold">Music Project 1</h3>
                <div class="flex flex-wrap gap-2 mb-2">
                  <span class="chip bg-yellow-100 text-yellow-800"><i class="fas fa-music"></i> Composition</span>
                  <span class="chip bg-purple-100 text-purple-800"><i class="fas fa-guitar"></i> Performance</span>
                </div>
                <p class="text-gray-600">Descripción breve del proyecto musical 1.</p>
                <div class="flex gap-2 mt-2">
                  <a href="#" class="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center gap-1"><i class="fab fa-github"></i> Code</a>
                  <a href="#" class="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-1"><i class="fas fa-eye"></i> Preview</a>
                </div>
              </div>
            </div>
            <div class="project-card flex items-center gap-4 p-4 bg-white rounded-lg shadow-lg hover:scale-105 transform transition">
              <img src="/hero.webp" alt="Music Project 2" class="w-32 h-32 object-cover rounded-lg">
              <div>
                <h3 class="text-xl font-bold">Music Project 2</h3>
                <div class="flex flex-wrap gap-2 mb-2">
                  <span class="chip bg-yellow-100 text-yellow-800"><i class="fas fa-music"></i> Composition</span>
                  <span class="chip bg-purple-100 text-purple-800"><i class="fas fa-guitar"></i> Performance</span>
                </div>
                <p class="text-gray-600">Descripción breve del proyecto musical 2.</p>
                <div class="flex gap-2 mt-2">
                  <a href="#" class="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center gap-1"><i class="fab fa-github"></i> Code</a>
                  <a href="#" class="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-1"><i class="fas fa-eye"></i> Preview</a>
                </div>
              </div>
            </div>
            <div class="project-card flex items-center gap-4 p-4 bg-white rounded-lg shadow-lg hover:scale-105 transform transition">
              <img src="/path/to/music-project3.jpg" alt="Music Project 3" class="w-32 h-32 object-cover rounded-lg">
              <div>
                <h3 class="text-xl font-bold">Music Project 3</h3>
                <div class="flex flex-wrap gap-2 mb-2">
                  <span class="chip bg-yellow-100 text-yellow-800"><i class="fas fa-music"></i> Composition</span>
                  <span class="chip bg-purple-100 text-purple-800"><i class="fas fa-guitar"></i> Performance</span>
                </div>
                <p class="text-gray-600">Descripción breve del proyecto musical 3.</p>
                <div class="flex gap-2 mt-2">
                  <a href="#" class="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center gap-1"><i class="fab fa-github"></i> Code</a>
                  <a href="#" class="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-1"><i class="fas fa-eye"></i> Preview</a>
                </div>
              </div>
            </div>
          </div>
          <div class="text-left p-6 bg-gray-700 bg-opacity-75 rounded-lg shadow-lg mt-8">
            <h3 class="text-2xl font-semibold mb-2 text-white">Sobre Mí</h3>
            <p class="text-white">Soy Dylan Hurtado López, un músico apasionado con una gran dedicación a la composición y la interpretación. Desde pequeño, la música ha sido mi refugio y mi forma de expresión. He tocado en numerosos conciertos y he trabajado en estudios de grabación para perfeccionar mi arte. Mi misión es inspirar a otros a través de mi música y compartir mi viaje con el mundo.</p>
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
      return this.activeTab === tab ? 'bg-red-500 text-white flex items-center space-x-2' : 'bg-white text-red-500 border-red-500 hover:bg-red-100 flex items-center space-x-2';
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
  padding: 10px 20px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.3s;
  border-radius: 500px;
}
.tab:hover {
  border-color: #ff0000;
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
.icon {
  display: block;
}
.chip {
  padding: 2px 8px;
  border-radius: 9999px;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 4px;
}
</style>
