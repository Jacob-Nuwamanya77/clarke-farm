import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';
// import { LoginCallback, navigationGuard } from '@okta/okta-vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('@/views/HomePage.vue'),
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
    component: () => import('@/views/LoginPage2.vue'),
  },
  // Dashboard Routes
  {
    path: '/admin/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/Dashboard.vue'),
    beforeEnter: (to, from, next) => {
      if (store.state.users.isAuthenticated === true) {
        next();
      } else {
        sessionStorage.removeItem('access_token');
        next('/admin');
      }
    },

  },
  {
    path: '/admin/booking',
    name: 'AdminBooking',
    component: () => import('@/views/AdminBooking.vue'),
    beforeEnter: (to, from, next) => {
      if (store.state.users.isAuthenticated === true) {
        next();
      } else {
        sessionStorage.removeItem('access_token');
        next('/admin');
      }
    },

  },
  {
    path: '/admin/orders',
    name: 'CoffeeOrders',
    component: () => import('@/views/CoffeeOrders.vue'),
    beforeEnter: (to, from, next) => {
      if (store.state.users.isAuthenticated === true) {
        next();
      } else {
        sessionStorage.removeItem('access_token');
        next('/admin');
      }
    },

  },
  {
    path: '/admin/reviews',
    name: 'Reviews',
    component: () => import('@/views/AdminReviews.vue'),
    beforeEnter: (to, from, next) => {
      if (store.state.users.isAuthenticated === true) {
        next();
      } else {
        sessionStorage.removeItem('access_token');
        next('/admin');
      }
    },

  },
  {
    path: '/admin/settings',
    name: 'Settings',
    component: () => import('@/views/AdminSettings.vue'),
    beforeEnter: (to, from, next) => {
      if (store.state.users.isAuthenticated === true) {
        next();
      } else {
        sessionStorage.removeItem('access_token');
        next('/admin');
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
