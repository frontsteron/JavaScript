import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue';
import Blog from '../views/Blog.vue';
import BlogDetails from '../views/BlogDetails.vue';
import Project from '../views/Project.vue';
import ProjectDetails from '../views/ProjectDetails.vue';
import NotFound from '../views/NotFound.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home, // Замените на компонент вашей домашней страницы
  },
  {
    path: '/blog/:id',
    name: 'blog-details',
    component: BlogDetails, // Замените на компонент BlogDetails
  },
  {
    path: '/blogs',
    name: 'blogs-list',
    component: BlogsList, // Замените на компонент BlogsList
  },
  // Страница 404
  {
    path: '*',
    name: 'not-found',
    component: NotFound, // Замените на компонент 404 страницы
  },
];

const router = new VueRouter({
  mode: 'history', // Используйте 'history' режим для чистых URL
  base: process.env.BASE_URL,
  routes,
});

export default router;