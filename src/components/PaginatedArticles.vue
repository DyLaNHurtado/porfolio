<template>
  <section class="section scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl py-10">
    <div v-if="articles.length === 0" class="text-center text-gray-600 dark:text-gray-400">No posts available</div>
    <div v-else class="container mx-auto grid grid-cols-1 gap-8">
      <h2 class="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="h-8 w-8 icon" data-v-c970699f=""><path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z"></path></svg>
        Artículos del blog
      </h2>
      <div class="chips flex flex-row flex-wrap items-center justify-start gap-3">
        <h3>Filtra por tags:</h3>
        <span 
          v-for="tag in allTags" 
          @click="clickTag(tag)" 
          :key="tag" 
          :class="getTagClass(tag) + ' flex gap-x-2 rounded-full text-xs border-2 py-1 px-2 text-white cursor-pointer transition-transform transform hover:scale-105'"
        >
          {{ tag }}
        </span>
      </div>
      <BlogArticle
        v-for="article in filteredArticles"
        :key="article.id"
        :title="article.title"
        :subtitle="article.subtitle"
        :date="article.date"
        :imageUrl="article.imageUrl"
        :author="article.author"
        :tags="article.tags"
      />
    </div>
    <div v-if="articles.length > 0" class="flex justify-center items-center mt-8 gap-3">
      <button 
        @click="prevPage" 
        :disabled="currentPage === 1" 
        class="px-4 py-2 bg-gray-800 text-white rounded-lg"
        v-if="currentPage > 1"
      >Anterior</button>
      <div class="flex items-center justify-center gap-3">
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
      tagsSelected: [],
      tagColors: {}
    };
  },
  computed: {
    allTags() {
      let allTags = [];
      if (this.articles != null && this.articles.length > 0) {
        this.articles.forEach(article => {
          allTags = allTags.concat(article?.tags);
        });
      }
      return [...new Set(allTags)];
    },
    totalPages() {
      return Math.ceil(this.articles.length / this.articlesPerPage);
    },
    filteredArticles() {
      const filtered = this.tagsSelected.length === 0
        ? this.articles
        : this.articles.filter(article =>
            article.tags.some(tag => this.tagsSelected.includes(tag))
          );
      const start = (this.currentPage - 1) * this.articlesPerPage;
      const end = start + this.articlesPerPage;
      return filtered.slice(start, end);
    }
  },
  methods: {
    getRandomColor() {
      const colors  = ['red', 'green', 'orange', 'yellow', 'violet', 'blue', 'lime', 'emerald', 'teal', 'sky', 'purple', 'fuchsia', 'pink'];
      const numbers = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];
      const colorIndex = Math.floor(Math.random() * colors.length);
      const numberIndex = Math.floor(Math.random() * numbers.length);
      return `border-${colors[colorIndex]}-${numbers[numberIndex]}`;
    },
    getTagClass(tag) {
      if (!this.tagColors[tag]) {
        this.tagColors[tag] = this.getRandomColor();
      }
      return `${this.tagColors[tag]} ${this.tagsSelected.includes(tag) ? 'bg-white text-black' : ''}`;
    },
    clickTag(tag) {
      if (this.tagsSelected.includes(tag)) {
        this.tagsSelected = this.tagsSelected.filter(tagName => tagName !== tag);
      } else {
        this.tagsSelected.push(tag);
      }
    },
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
    }
  },
  mounted() {
    this.allTags.forEach(tag => {
      this.tagColors.tag =this.getRandomColor();
    });
  }
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