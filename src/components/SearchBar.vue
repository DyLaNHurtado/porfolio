<template>
  <div class="relative w-full">
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Search..."
      @input="onSearchInput"
      class="w-full px-4 py-2 border bg-transparent border-gray-600 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-transparent focus:border-gray-300 transition ease-in-out duration-200"
    />
    <ul v-if="suggestions.length && searchQuery" class="absolute z-10 bg-white border border-gray-200 w-full mt-2 rounded-lg shadow-lg">
      <li 
        v-for="(suggestion, index) in suggestions" 
        :key="index" 
        @click="selectSuggestion(suggestion)" 
        class="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
      >
        <img v-if="suggestion.image" :src="suggestion.image" alt="Product Image" class="inline-block w-6 h-6 mr-3 rounded-full">
        {{ suggestion.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      searchQuery: this.value,
      suggestions: []
    };
  },
  watch: {
    value(newValue) {
      this.searchQuery = newValue;
    }
  },
  methods: {
    onSearchInput() {
      this.$emit('search', this.searchQuery);
      this.fetchSuggestions(this.searchQuery);
    },
    fetchSuggestions(query) {
      if (query.length > 1) {
        this.suggestions = [
          { text: 'Example Item 1', image: 'https://via.placeholder.com/24' },
          { text: 'Example Item 2', image: 'https://via.placeholder.com/24' },
          { text: 'Example Item 3', image: 'https://via.placeholder.com/24' }
        ];
      } else {
        this.suggestions = [];
      }
    },
    selectSuggestion(suggestion) {
      this.searchQuery = suggestion.text;
      this.$emit('search', this.searchQuery);
      this.suggestions = [];
    }
  }
};
</script>

<style scoped>
/* Estilos específicos para la barra de búsqueda */
</style>
