<template>
  <header
    id="header-nav"
    class="text-gray-300 z-40 py-4 fixed w-full top-0 left-0 transition-transform duration-300 ease-in-out shadow-sm"
  >
    <nav class="nav-main container mx-auto flex justify-between items-center px-4 lg:max-w-xl rounded-full backdrop-blur-sm bg-opacity-80 bg-gray-500">
      <a href="/" :class="['nav-link flex items-center space-x-1 p-3', isActive('/') ? 'active-link' : '']">
        <HomeIcon class="h-5 w-5 icon" />
        <span>Home</span>
      </a>
      <a href="/about" :class="['nav-link flex items-center space-x-1 p-3', isActive('/about') ? 'active-link' : '']">
        <InformationCircleIcon class="h-5 w-5 icon" />
        <span>About</span>
      </a>
      <a href="/blog" :class="['nav-link flex items-center space-x-1 p-3', isActive('/blog') ? 'active-link' : '']">
        <BookOpenIcon class="h-5 w-5 icon" />
        <span>Blog</span>
      </a>
      <a href="/projects" :class="['nav-link flex items-center space-x-1 p-3', isActive('/projects') ? 'active-link' : '']">
        <BriefcaseIcon class="h-5 w-5 icon" />
        <span>Projects</span>
      </a>
      <a href="/contact" :class="['nav-link flex items-center space-x-1 p-3', isActive('/contact') ? 'active-link' : '']">
        <EnvelopeIcon class="h-5 w-5 icon" />
        <span>Contact</span>
      </a>
    </nav>
  </header>
</template>

<script>
import { HomeIcon, InformationCircleIcon, BookOpenIcon, BriefcaseIcon, EnvelopeIcon } from '@heroicons/vue/24/solid';

export default {
  name: 'Header',
  data() {
    return {
      isHidden: false,

    };
  },
  methods: {
    isActive(path) {
      if (typeof window !== 'undefined') {
      return window.location.pathname === path;
      }
    }
  },
  components: {
    HomeIcon,
    InformationCircleIcon,
    BookOpenIcon,
    BriefcaseIcon,
    EnvelopeIcon
  }
}
</script>

<style scoped>
/* Estilos para enlaces de navegación */
.nav-link {
  transition: color 0.3s ease, transform 0.3s ease;
}
.nav-link:hover {
  color: #ef4444; /* Color rojo al pasar el cursor */
  transform: translateY(-2px); /* Efecto de elevación */
}
.active-link {
  color: #ef4444;
  font-weight: bold;
}

/* Estilos para pantallas pequeñas */
@media (max-width: 768px) {
    .md\:mt-28 {
        margin-top: 7rem /* 112px */;
    }
  #header-nav {
    top: auto;
    bottom: 0;
    padding: 0px;
    margin: 0;
  }
  .nav-main {
    border-radius: 0px;
    margin: 0;
    width: 100%;
    min-width: 100%;
  }
  a,
  .nav-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 0;
    width: 100%;
    font-size: small;
  }
}
</style>
