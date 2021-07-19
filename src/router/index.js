import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/visit',
    name: 'VisitPage',
    component: () => import('@/views/VisitPage.vue'),
  },
  {
    path: '/coffee',
    name: 'CoffeePage',
    component: () => import('@/views/CoffeePage.vue'),
  },
  {
    path: '/training-programs',
    name: 'TrainingPrograms',
    component: () => import('@/views/TrainingPrograms.vue'),
  },
  {
    path: '/admin',
    name: 'LoginPage',
    component: () => import('@/views/LoginPage.vue'),
  },
  {
    path: '/admin/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/Dashboard.vue'),
  },
  {
    path: '/admin/booking',
    name: 'AdminBooking',
    component: () => import('@/views/AdminBooking.vue'),
  },
  {
    path: '/admin/reviews',
    name: 'Reviews',
    component: () => import('@/views/AdminReviews.vue'),
  },
  {
    path: '/admin/settings/',
    name: 'Settings',
    component: () => import('@/views/AdminSettings.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
