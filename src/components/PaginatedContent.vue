<template>
    <section class="section scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl py-10">
      <div v-if="loading" class="flex justify-center items-center h-64">
        <Spinner />
      </div>
      <div v-else-if="items.length === 0" class="text-center text-gray-600 dark:text-gray-400">
        No items available
      </div>
      <div v-else class="container mx-auto grid grid-cols-1 place-items-center gap-8">
        <h2 class="flex items-center w-full mb-6 text-3xl text-start font-semibold gap-x-3 text-black/80 dark:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-8 w-8">
            <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z"></path>
          </svg>
          {{ title }}
        </h2>
        <SearchBar v-if="filterable" v-model="searchQuery" @search="searchQuery = $event"/>

        <TagFilters v-if="filterable" :tags="allTags" @tagSelected="handleTagSelection" :selectedTags="tagsSelected"/>
        <p>
            Showing {{ paginatedItems.length }} of {{ items.length }} items
        </p>
        <ItemList :items="paginatedItems" :itemComponent="itemComponent"/>
        <PaginationControls
          :currentPage="currentPage"
          :totalPages="totalPages"
          @prevPage="prevPage"
          @nextPage="nextPage"
          @goToPage="goToPage"
        />
      </div>
    </section>
  </template>
  
  <script>
  import ItemList from '../components/ItemList.vue';
  import PaginationControls from '../components/PaginationControls.vue';
  import TagFilters from '../components/TagFilters.vue';
  import SearchBar from '../components/SearchBar.vue';
  import Spinner from '../components/Spinner.vue';
  import BlogArticle from '@/components/BlogArticle.vue';
  import ProjectCard from '@/components/ProjectCard.vue';
  
  export default {
    name: 'PaginatedContent',
    components: {
      ItemList,
      PaginationControls,
      TagFilters,
      Spinner,
      SearchBar,
      BlogArticle,
      ProjectCard
    },
    props: {
      title: {
        type: String,
        required: true
      },
      items: {
        type: Array,
        required: true
      },
      itemComponent: {
        type: String,
        required: true
      },
      filterable: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        currentPage: 1,
        itemsPerPage: 10,
        tagsSelected: [],
        searchQuery: '',
        loading: false
      };
    },
    computed: {
      allTags() {
        let allTags = [];
        if (this.items.length > 0) {
          this.items.forEach(item => {
            if (item.tags) {
              allTags = allTags.concat(item.tags);
            }
          });
        }
        return [...new Set(allTags)];
      },
      totalPages() {
        return Math.ceil(this.filteredItems.length / this.itemsPerPage);
      },
        filteredItems() {
            let filtered = this.items;
            if (this.tagsSelected.length > 0) {
                filtered = filtered.filter(item =>
                    item.tags && item.tags.some(tag => this.tagsSelected.includes(tag))
                );
            }
            if (this.searchQuery) {
                const searchQueryLowerCase = this.searchQuery.toLowerCase().trim();

                filtered = filtered.filter(item => {
                    const titleMatch = item.title && item.title.toLowerCase().includes(searchQueryLowerCase);
                    const descriptionMatch = item.description && item.description.toLowerCase().includes(searchQueryLowerCase);
                    const authorMatch = item.author ? item.author && item.author.toLowerCase().includes(searchQueryLowerCase): false;

                    return titleMatch || descriptionMatch || authorMatch;
                });
            }

            return filtered;
        }
        ,
      paginatedItems() {
        const start = (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.filteredItems.slice(start, end);
      }
    },
    methods: {
      handleTagSelection(tag) {
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
    }
  };
  </script>
  