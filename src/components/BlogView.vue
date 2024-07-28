<template>
  <section class="blog-view py-8 container mx-auto">
    <h2 class="text-3xl font-bold text-center text-red-500">Blog</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
      <div class="blog-item bg-white rounded-lg shadow-lg overflow-hidden" v-for="post in blogPosts" :key="post.id">
        <img :src="post.image" :alt="post.title" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="text-xl font-bold text-red-500">{{ post.title }}</h3>
          <p class="mt-2 text-gray-600">{{ post.intro }}</p>
          <button @click="goToPost(post.id)" class="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Read More</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      blogPosts: [
        { id: 1, image: '/path/to/blog1.jpg', title: 'Blog Post 1', intro: 'Introduction to blog post 1' },
        { id: 2, image: '/path/to/blog2.jpg', title: 'Blog Post 2', intro: 'Introduction to blog post 2' },
        { id: 3, image: '/path/to/blog3.jpg', title: 'Blog Post 3', intro: 'Introduction to blog post 3' },
      ]
    };
  },
  methods: {
    goToPost(id) {
      // Navigate to the blog post
    }
  }
};
</script>
