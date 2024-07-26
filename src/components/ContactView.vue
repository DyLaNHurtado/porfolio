<template>
  <div class="contact-page py-12 bg-gray-100">
    <section class="container mx-auto px-6">
      <h2 class="text-4xl font-bold text-center mb-6">Contact Me</h2>
      <form class="bg-white p-8 shadow-lg rounded-lg">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50" required />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50" required />
          </div>
        </div>
        <div class="mt-6">
          <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
          <textarea id="message" rows="4" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50" required></textarea>
        </div>
        <button type="submit" class="mt-6 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
          Send Message
        </button>
      </form>
    </section>
  </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        message: ''
      };
    },
    methods: {
      sendMessage() {
        // Implement your send message logic here
        alert(`Message sent!`);
      }
    }
  };
  </script>
  