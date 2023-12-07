import { createRouter, createWebHistory } from 'vue-router'
import PostView from "@/views/PostView.vue";
import TitleView from "@/views/TitleView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: TitleView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/posts/:id',
    name: 'posts',
    component: PostView
  },
  {
    path: '/main',
    name:'main',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/HomeView.vue')

  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('@/views/ContactsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
