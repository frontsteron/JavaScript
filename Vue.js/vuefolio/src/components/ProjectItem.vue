<template>
   <div class="project-item">
     <h3>{{ project.name }}</h3>
     <p>{{ project.description }}</p>
   </div>
 </template>
 
 <script>
 export default {
   props: {
     project: Object, // Пропс для передачи информации о проекте
   },
 };
 </script>
 
 <style scoped>

 </style> 