<template>
    <section class="py-10">
      <div v-if="articles.length === 0" class="text-center text-gray-600 dark:text-gray-400">No posts available</div>
      <div v-else class="container mx-auto grid grid-cols-1 gap-8">
        <BlogArticle
          v-for="article in paginatedArticles"
          :key="article.id"
          :title="article.title"
          :subtitle="article.subtitle"
          :date="article.date"
          :imageUrl="article.imageUrl"
          :author="article.author"
          :tags="article.tags"
        />
      </div>
      <div v-if="articles.length > 0" class="flex justify-between items-center mt-8">
        <button 
          @click="prevPage" 
          :disabled="currentPage === 1" 
          class="px-4 py-2 bg-gray-800 text-white rounded-lg"
          v-if="currentPage > 1"
        >Anterior</button>
        <div class="flex space-x-2">
          <button 
            v-for="page in totalPages" 
            :key="page" 
            @click="goToPage(page)" 
            :class="['px-4 py-2 rounded-lg', page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700']"
          >
            {{ page }}
          </button>
        </div>
        <button 
          @click="nextPage" 
          :disabled="currentPage === totalPages" 
          class="px-4 py-2 bg-gray-800 text-white rounded-lg"
          v-if="currentPage < totalPages"
        >Siguiente</button>
      </div>
    </section>
  </template>
  
  <script>
  import BlogArticle from './BlogArticle.vue';
  
  export default {
    name: 'PaginatedArticles',
    components: {
      BlogArticle,
    },
    data() {
      return {
        articles: [
          {
            id: 1,
            title: 'Introduction to Vue.js',
            subtitle: 'Learn the basics of Vue.js',
            date: '2023-01-01',
            imageUrl: 'https://via.placeholder.com/150',
            author: 'John Doe',
            tags: ['Vue', 'JavaScript', 'Frontend'],
          },
          {
            id: 2,
            title: 'Advanced Vue.js Techniques',
            subtitle: 'Deep dive into Vue.js features',
            date: '2023-01-02',
            imageUrl: 'https://via.placeholder.com/150',
            author: 'Jane Smith',
            tags: ['Vue', 'JavaScript', 'Advanced'],
          },
          {
            id: 3,
            title: 'Building Single Page Applications with Vue',
            subtitle: 'How to build SPAs with Vue',
            date: '2023-01-03',
            imageUrl: 'https://via.placeholder.com/150',
            author: 'Alice Johnson',
            tags: ['Vue', 'SPA', 'JavaScript'],
          },
          {
            id: 4,
            title: 'State Management in Vue with Vuex',
            subtitle: 'Manage state in your Vue.js applications',
            date: '2023-01-04',
            imageUrl: 'https://via.placeholder.com/150',
            author: 'Bob Brown',
            tags: ['Vue', 'Vuex', 'State Management'],
          },
          {
            id: 5,
            title: 'Testing Vue.js Applications',
            subtitle: 'Learn how to test your Vue.js apps',
            date: '2023-01-05',
            imageUrl: 'https://via.placeholder.com/150',
            author: 'Charlie Davis',
            tags: ['Vue', 'Testing', 'JavaScript'],
          },
          {
            id: 6,
            title: 'Deploying Vue.js Applications',
            subtitle: 'How to deploy your Vue.js applications',
            date: '2023-01-06',
            imageUrl: 'https://via.placeholder.com/150',
            author: 'Dana Evans',
            tags: ['Vue', 'Deployment', 'JavaScript'],
          },
          {
            id: 7,
            title: 'Vue Router for Navigation',
            subtitle: 'Implement navigation in Vue apps',
            date: '2023-01-07',
            imageUrl: 'https://via.placeholder.com/150',
            author: 'Evan Ford',
            tags: ['Vue', 'Router', 'Navigation'],
          },
          {
            id: 8,
            title: 'Building Forms in Vue',
            subtitle: 'Learn to build and validate forms',
            date: '2023-01-08',
            imageUrl: 'https://via.placeholder.com/150',
            author: 'Fiona Green',
            tags: ['Vue', 'Forms', 'Validation'],
          },
          {
            id: 9,
            title: 'Vue.js Directives',
            subtitle: 'Understanding Vue.js directives',
            date: '2023-01-09',
            imageUrl: 'https://via.placeholder.com/150',
            author: 'George Harris',
            tags: ['Vue', 'Directives', 'JavaScript'],
          },
          {
            id: 10,
            title: 'Server-Side Rendering with Vue',
            subtitle: 'SSR in Vue.js applications',
            date: '2023-01-10',
            imageUrl: 'https://via.placeholder.com/150',
            author: 'Hannah Irving',
            tags: ['Vue', 'SSR', 'JavaScript'],
          },
          {
            id: 11,
            title: 'Animations in Vue.js',
            subtitle: 'Add animations to your Vue apps',
            date: '2023-01-11',
            imageUrl: 'https://via.placeholder.com/150',
            author: 'Ivy Jackson',
            tags: ['Vue', 'Animations', 'JavaScript'],
          },
          {
            id: 12,
            title: 'Vue.js and TypeScript',
            subtitle: 'Use TypeScript in your Vue apps',
            date: '2023-01-12',
            imageUrl: 'https://via.placeholder.com/150',
            author: 'Jack Kelly',
            tags: ['Vue', 'TypeScript', 'JavaScript'],
          },
          {
            id: 13,
            title: 'Building Component Libraries with Vue',
            subtitle: 'Create reusable components',
            date: '2023-01-13',
            imageUrl: 'https://via.placeholder.com/150',
            author: 'Karen Lewis',
            tags: ['Vue', 'Components', 'JavaScript'],
          },
          {
            id: 14,
            title: 'Vue.js Performance Optimization',
            subtitle: 'Optimize your Vue.js applications',
            date: '2023-01-14',
            imageUrl: 'https://via.placeholder.com/150',
            author: 'Leo Martin',
            tags: ['Vue', 'Performance', 'JavaScript'],
          },
          {
            id: 15,
            title: 'Internationalization in Vue.js',
            subtitle: 'i18n in Vue.js applications',
            date: '2023-01-15',
            imageUrl: 'https://via.placeholder.com/150',
            author: 'Mia Nelson',
            tags: ['Vue', 'i18n', 'JavaScript'],
          },
          {
            id: 16,
            title: 'Integrating Vue.js with Backend Services',
            subtitle: 'Connect Vue.js with APIs',
            date: '2023-01-16',
            imageUrl: 'https://via.placeholder.com/150',
            author: 'Noah Owens',
            tags: ['Vue', 'API', 'JavaScript'],
          },
          {
            id: 17,
            title: 'Building Mobile Apps with Vue.js',
            subtitle: 'Use Vue.js to build mobile applications',
            date: '2023-01-17',
            imageUrl: 'https://via.placeholder.com/150',
            author: 'Olivia Parker',
            tags: ['Vue', 'Mobile', 'JavaScript'],
          },
          {
            id: 18,
            title: 'Understanding Vue.js Reactivity',
            subtitle: 'Deep dive into Vue.js reactivity',
            date: '2023-01-18',
            imageUrl: 'https://via.placeholder.com/150',
            author: 'Peter Quinn',
            tags: ['Vue', 'Reactivity', 'JavaScript'],
          },
          {
            id: 19,
            title: 'Vue.js Ecosystem Overview',
            subtitle: 'Explore the Vue.js ecosystem',
            date: '2023-01-19',
            imageUrl: 'https://via.placeholder.com/150',
            author: 'Quincy Robinson',
            tags: ['Vue', 'Ecosystem', 'JavaScript'],
          },
          {
            id: 20,
            title: 'Vue.js Best Practices',
            subtitle: 'Follow best practices in Vue.js',
            date: '2023-01-20',
            imageUrl: 'https://via.placeholder.com/150',
            author: 'Ruby Sanders',
            tags: ['Vue', 'Best Practices', 'JavaScript'],
          },
        ],
        currentPage: 1,
        articlesPerPage: 10,
      };
    },
    computed: {
      totalPages() {
        return Math.ceil(this.articles.length / this.articlesPerPage);
      },
      paginatedArticles() {
        const start = (this.currentPage - 1) * this.articlesPerPage;
        const end = start + this.articlesPerPage;
        return this.articles.slice(start, end);
      },
    },
    methods: {
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage += 1;
        }
      },
      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage -= 1;
        }
      },
      goToPage(page) {
        this.currentPage = page;
      },
    },
  };
  </script>
  
  <style scoped>
  .button-active {
    background-color: #1E40AF;
    color: #FFF;
  }
  .button-inactive {
    background-color: #E5E7EB;
    color: #1F2937;
  }
  </style>
  