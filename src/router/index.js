import { createRouter, createWebHistory } from 'vue-router';
import DayView from '@/views/Day.vue';

const routes = [
  {
    path: '/',
    name: 'day',
    component: DayView,
  },
  {
    path: '/month',
    name: 'month',
    component: () => import('@/views/Month.vue'),
  },
  {
    path: '/year',
    name: 'year',
    component: () => import('@/views/Year.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
