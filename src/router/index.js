/* eslint-disable import/no-unresolved */
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import VisitPage from '@/views/VisitPage.vue';
import CoffeePage from '@/views/CoffeePage.vue';
import TrainingPrograms from '@/views/TrainingPrograms.vue';
import CoffeeForm from '@/views/CoffeeForm.vue';
// eslint-disable-next-line import/no-unresolved
import BookingPage from '@/views/BookingPage.vue';

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
  {
    path: '/coffee',
    name: 'CoffeePage',
    component: CoffeePage,
  },
  {
    path: '/buy-coffee',
    name: 'CoffeeForm',
    component: CoffeeForm,
  },
  {
    path: '/training-programs',
    name: 'TrainingProgram',
    component: TrainingPrograms,
  },
  {
    path: '/book',
    name: 'BookingPage',
    component: BookingPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
