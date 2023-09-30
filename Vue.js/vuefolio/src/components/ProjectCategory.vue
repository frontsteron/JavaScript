<template>
   <div class="project-category">
     <button @click="selectCategory">{{ category.name }}</button>
   </div>
 </template>
 
 <script>
 export default {
   props: {
     category: Object, // Пропс для передачи информации о категории
     selectedCategory: String, // Пропс для передачи выбранной категории
   },
   methods: {
     selectCategory() {
       this.$emit('category-selected', this.category.name);
     },
   },
 };
 </script>
 
 <style scoped>

 </style>
 