import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage, // Home page
  },
];

const router = createRouter({
  history: createWebHistory(), // Uses modern browser history
  routes,
});

export default router;
