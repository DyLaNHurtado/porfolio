<template>
    <div class="mb-6 flex flex-wrap gap-2">
      <button
        v-for="tag in tags"
        :key="tag"
        :class="['border rounded px-3 py-1 cursor-pointer transition-colors duration-300', getTagClass(tag)]"
        @click="selectTag(tag)"
      >
        {{ tag }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TagFilters',
    data() {
        return {
          tagColors: {}
        };
    },
    props: {
      tags: {
        type: Array,
        required: true
      },
      selectedTags: {
        type: Array,
        default: () => []
      }
    },
    methods: {
        getRandomColor() {
        const colors  = ['red', 'green', 'orange', 'yellow', 'violet', 'blue', 'lime', 'emerald', 'teal', 'sky', 'purple', 'fuchsia', 'pink'];
        const numbers = ['400', '500', '600', '700', '800', '900'];
        const colorIndex = Math.floor(Math.random() * colors.length);
        const numberIndex = Math.floor(Math.random() * numbers.length);
        return `${colors[colorIndex]}-${numbers[numberIndex]}`;
      },
      getTagClass(tag) {
        if (!this.tagColors[tag]) {
          this.tagColors[tag] = this.getRandomColor();
        }
        const colorClass = `border-${this.tagColors[tag]}`;
        const selectedClass = this.selectedTags.includes(tag) ? `bg-${this.tagColors[tag]}  text-bold` : '';
        return `${colorClass} ${selectedClass}`;
      },
      selectTag(tag) {
        this.$emit('tagSelected', tag);
      }
    },
    mounted() {
    this.tags.forEach(tag => {
      this.tagColors[tag] = this.getRandomColor();
    });
  }
  };
  </script>
  