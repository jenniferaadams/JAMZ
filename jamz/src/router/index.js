import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage, // Home page
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage, // About page
  },
];

const router = createRouter({
  history: createWebHistory(), // Uses modern browser history
  routes,
});

export default router;
