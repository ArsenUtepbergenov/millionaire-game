import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { Pages } from '../enums'
import PageNotFound from '../views/PageNotFound.vue'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: Pages.PAGE_NOT_FOUND,
    component: PageNotFound,
    meta: {
      title: 'Opps!',
    },
  },
  {
    path: '/',
    name: Pages.HOME,
    component: Home,
    meta: {
      title: 'Home',
    },
  },
] as RouteRecordRaw[]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
