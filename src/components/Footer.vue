<template>
  <footer class="bg-gray-800 text-white py-4 text-center">
    <p>&copy; {{ new Date().getFullYear() }} Dylan Hurtado López. All rights reserved.</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  mounted(){
    console.log('Footer component mounted')
  }
}
</script>