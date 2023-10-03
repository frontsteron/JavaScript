<template>
   <div>
     <swiper :options="swiperOptions">
       <swiper-slide v-for="(slide, index) in slides" :key="index">
         <img :src="slide.image" alt="Slide Image" />
       </swiper-slide>
       <!-- Другие слайды -->
     </swiper>
   </div>
 </template>
 
 <script>
 import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
 import 'swiper/css/swiper.css';
 
 export default {
   components: {
     Swiper,
     SwiperSlide,
   },
   data() {
     return {
       swiperOptions: {
         // Опции слайдера
         loop: true,
         pagination: {
           el: '.swiper-pagination',
         },
       },
       slides: [
         { image: 'path-to-image-1.jpg' },
         { image: 'path-to-image-2.jpg' },
         // Добавьте другие слайды здесь
       ],
     };
   },
 };
 </script> 