import { createRouter, createWebHistory } from 'vue-router'
import PostView from "@/views/PostView.vue";
import TitleView from "@/views/TitleView.vue";

const routes = [
  {
    path: '/',
    name: 'Главная',
    component: TitleView
  },
  {
    path: '/about',
    name: 'Контакты',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/posts/:id',
    name: 'Инфо',
    component: PostView
  },
  {
    path: '/main',
    name:'Информация',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/HomeView.vue')

  },
  {
    path: '/contacts',
    name: 'О нас',
    component: () => import('@/views/ContactsView.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

export default router;
