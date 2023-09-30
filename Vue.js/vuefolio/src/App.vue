<template>
  <div class="project-page">
    <h2>Projects</h2>

    <!-- Блок с категориями -->
    <div class="categories">
      <project-category
        v-for="category in categories"
        :key="category.id"
        :category="category"
        :selectedCategory="selectedCategory"
        @category-selected="selectCategory"
      />
    </div>

    <!-- Блок с проектами -->
    <div class="projects">
      <project-item
        v-for="project in filteredProjects"
        :key="project.id"
        :project="project"
      />
    </div>
  </div>
<ProductDetails :product="selectedProduct" />

</template>

<script>
import ProjectCategory from './components/ProjectCategory.vue';
import ProjectItem from './components/ProjectItem.vue';
import ProductDetails from './components/ProductDetails.vue';

export default {
  components: {
    ProductDetails,
    'project-category': ProjectCategory,
    'project-item': ProjectItem,
  },
  data() {
    return {
      categories: [
        { id: 1, name: 'Category 1' },
        { id: 2, name: 'Category 2' },
        { id: 3, name: 'Category 3' },
      ],
      projects: [
        { id: 1, name: 'Project 1', description: 'Description 1', category: 'Category 1' },
        { id: 2, name: 'Project 2', description: 'Description 2', category: 'Category 2' },
        { id: 3, name: 'Project 3', description: 'Description 3', category: 'Category 1' },
        { id: 4, name: 'Project 4', description: 'Description 4', category: 'Category 3' },
      ],
      selectedProduct: {
      name: 'Initial Product Name', // Имя продукта
      // Другие свойства продукта
    },
      selectedCategory: 'Category 1', // Изначально выбранная категория
    };
  },
  computed: {
    // Вычисляемое свойство для фильтрации проектов по выбранной категории
    filteredProjects() {
      return this.projects.filter((project) => project.category === this.selectedCategory);
    },
  },
  methods: {
    selectCategory(categoryName) {
      this.selectedCategory = categoryName;
    },
  },
};
</script>

<style scoped>

</style>
