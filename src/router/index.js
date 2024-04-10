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
    path: '/contacts',
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
    path: '/about',
    name: 'О нас',
    component: () => import('@/views/ContactsView.vue')
  },
  {
    path:'/categories',
    name:'Категории',
    component:()=> import('@/views/CategoriesView.vue')
  },
  {
    path: '/service/:id',
    name:'Услуги',
    component: ()=> import('@/views/ServiceView.vue')
  },
  {
    path:'/category/:id',
    name:'Каткгория',
    component: ()=> import('@/views/CategoryView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
});
router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

export default router;
