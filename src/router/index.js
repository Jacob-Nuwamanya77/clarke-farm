import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import VisitPage from '@/views/VisitPage.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/visit',
    name: 'VisitPage',
    component: VisitPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
