<template>
    <section class="contact-view py-8 container mx-auto">
      <h2 class="text-3xl font-bold text-center text-red-500">Contact Me</h2>
      <form @submit.prevent="sendMessage" class="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8 mt-8">
        <input type="text" placeholder="Your Name" v-model="name" required class="w-full mb-4 p-2 border rounded">
        <input type="email" placeholder="Your Email" v-model="email" required class="w-full mb-4 p-2 border rounded">
        <textarea placeholder="Your Message" v-model="message" required class="w-full mb-4 p-2 border rounded"></textarea>
        <button type="submit" class="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Send Message</button>
      </form>
    </section>
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
  