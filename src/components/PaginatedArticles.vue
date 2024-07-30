<template>
  <PaginatedContent
    title="Articulos del blog"
    :items="blogArticles"
    itemComponent="BlogArticle"
  />
</template>

<script>
import PaginatedContent from '@/components/PaginatedContent.vue';
import BlogArticle from '@/components/BlogArticle.vue';

export default {
  components: {
    PaginatedContent,
    BlogArticle
  },
  data() {
    return {
      blogArticles: [
          {
            id: 1,
            title: 'Introduction to Vue.js',
            description: 'Learn the basics of Vue.js',
            date: '2023-01-01',
            imageUrl: 'https://via.placeholder.com/150',
            author: 'John Doe',
            tags: ['Vue', 'JavaScript', 'Frontend'],
          },
          {
            id: 2,
            title: 'Advanced Vue.js Techniques',
            description: 'Deep dive into Vue.js features',
            date: '2023-01-02',
            imageUrl: 'https://via.placeholder.com/150',
            author: 'Jane Smith',
            tags: ['Vue', 'JavaScript', 'Advanced'],
          },
          {
            id: 3,
            title: 'Building Single Page Applications with Vue',
            description: 'How to build SPAs with Vue',
            date: '2023-01-03',
            imageUrl: 'https://via.placeholder.com/150',
            author: 'Alice Johnson',
            tags: ['Vue', 'SPA', 'JavaScript'],
          },
          {
            id: 4,
            title: 'State Management in Vue with Vuex',
            description: 'Manage state in your Vue.js applications',
            date: '2023-01-04',
            imageUrl: 'https://via.placeholder.com/150',
            author: 'Bob Brown',
            tags: ['Vue', 'Vuex', 'State Management'],
          },
          {
            id: 5,
            title: 'Testing Vue.js Applications',
            description: 'Learn how to test your Vue.js apps',
            date: '2023-01-05',
            imageUrl: 'https://via.placeholder.com/150',
            author: 'Charlie Davis',
            tags: ['Vue', 'Testing', 'JavaScript'],
          },
          {
            id: 6,
            title: 'Deploying Vue.js Applications',
            description: 'How to deploy your Vue.js applications',
            date: '2023-01-06',
            imageUrl: 'https://via.placeholder.com/150',
            author: 'Dana Evans',
            tags: ['Vue', 'Deployment', 'JavaScript'],
          },
          {
            id: 7,
            title: 'Vue Router for Navigation',
            description: 'Implement navigation in Vue apps',
            date: '2023-01-07',
            imageUrl: 'https://via.placeholder.com/150',
            author: 'Evan Ford',
            tags: ['Vue', 'Router', 'Navigation'],
          },
          {
            id: 8,
            title: 'Building Forms in Vue',
            description: 'Learn to build and validate forms',
            date: '2023-01-08',
            imageUrl: 'https://via.placeholder.com/150',
            author: 'Fiona Green',
            tags: ['Vue', 'Forms', 'Validation'],
          },
          {
            id: 9,
            title: 'Vue.js Directives',
            description: 'Understanding Vue.js directives',
            date: '2023-01-09',
            imageUrl: 'https://via.placeholder.com/150',
            author: 'George Harris',
            tags: ['Vue', 'Directives', 'JavaScript'],
          },
          {
            id: 10,
            title: 'Server-Side Rendering with Vue',
            description: 'SSR in Vue.js applications',
            date: '2023-01-10',
            imageUrl: 'https://via.placeholder.com/150',
            author: 'Hannah Irving',
            tags: ['Vue', 'SSR', 'JavaScript'],
          },
          {
            id: 11,
            title: 'Animations in Vue.js',
            description: 'Add animations to your Vue apps',
            date: '2023-01-11',
            imageUrl: 'https://via.placeholder.com/150',
            author: 'Ivy Jackson',
            tags: ['Vue', 'Animations', 'JavaScript'],
          },
          {
            id: 12,
            title: 'Vue.js and TypeScript',
            description: 'Use TypeScript in your Vue apps',
            date: '2023-01-12',
            imageUrl: 'https://via.placeholder.com/150',
            author: 'Jack Kelly',
            tags: ['Vue', 'TypeScript', 'JavaScript'],
          },
          {
            id: 13,
            title: 'Building Component Libraries with Vue',
            description: 'Create reusable components',
            date: '2023-01-13',
            imageUrl: 'https://via.placeholder.com/150',
            author: 'Karen Lewis',
            tags: ['Vue', 'Components', 'JavaScript'],
          },
          {
            id: 14,
            title: 'Vue.js Performance Optimization',
            description: 'Optimize your Vue.js applications',
            date: '2023-01-14',
            imageUrl: 'https://via.placeholder.com/150',
            author: 'Leo Martin',
            tags: ['Vue', 'Performance', 'JavaScript'],
          },
          {
            id: 15,
            title: 'Internationalization in Vue.js',
            description: 'i18n in Vue.js applications',
            date: '2023-01-15',
            imageUrl: 'https://via.placeholder.com/150',
            author: 'Mia Nelson',
            tags: ['Vue', 'i18n', 'JavaScript'],
          },
          {
            id: 16,
            title: 'Integrating Vue.js with Backend Services',
            description: 'Connect Vue.js with APIs',
            date: '2023-01-16',
            imageUrl: 'https://via.placeholder.com/150',
            author: 'Noah Owens',
            tags: ['Vue', 'API', 'JavaScript'],
          },
          {
            id: 17,
            title: 'Building Mobile Apps with Vue.js',
            description: 'Use Vue.js to build mobile applications',
            date: '2023-01-17',
            imageUrl: 'https://via.placeholder.com/150',
            author: 'Olivia Parker',
            tags: ['Vue', 'Mobile', 'JavaScript'],
          },
          {
            id: 18,
            title: 'Understanding Vue.js Reactivity',
            description: 'Deep dive into Vue.js reactivity',
            date: '2023-01-18',
            imageUrl: 'https://via.placeholder.com/150',
            author: 'Peter Quinn',
            tags: ['Vue', 'Reactivity', 'JavaScript'],
          },
          {
            id: 19,
            title: 'Vue.js Ecosystem Overview',
            description: 'Explore the Vue.js ecosystem',
            date: '2023-01-19',
            imageUrl: 'https://via.placeholder.com/150',
            author: 'Quincy Robinson',
            tags: ['Vue', 'Ecosystem', 'JavaScript'],
          },
          {
            id: 20,
            title: 'Vue.js Best Practices',
            description: 'Follow best practices in Vue.js',
            date: '2023-01-20',
            imageUrl: 'https://via.placeholder.com/150',
            author: 'Ruby Sanders',
            tags: ['Vue', 'Best Practices', 'JavaScript'],
          },
        ]
    };
  },
  created() {
    // Carga tus artículos desde una API o similar
  }
};
</script>
