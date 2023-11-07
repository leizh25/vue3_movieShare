import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Movie from '@/views/Movie.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/',
    component: Movie,
  },
  {
    path: '/movie',
    name: 'movie',
    component: Movie,
  },
  {
    path: '/tv',
    name: 'tv',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TV.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // eslint-disable-next-line
  scrollBehavior(_to, _from, _savedPosition) {
    // 始终滚动到顶部
    return { top: 0 };
  },
});

export default router;
