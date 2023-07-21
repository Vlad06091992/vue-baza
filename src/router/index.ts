import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Methods_reactive_computed from '@/components/Lesson 1/Methods_reactive_computed.vue';
import Lesson_1 from '@/components/Lesson 1/Lesson_1.vue';
import Watch from '@/components/Lesson 1/Watch.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/Lesson_1',
    name: 'home',
    component: Lesson_1,
    children: [
      {
        path: 'methods-reactive-computed',
        name: 'methodsReactiveComputed',
        component: Methods_reactive_computed,
      },
      {
        path: 'watchers',
        name: 'watchers',
        component: Watch,
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
