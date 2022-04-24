import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '../views/Auth.vue'
import Diary from '../views/Diary.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/diary',
    name: 'Diary',
    component: Diary
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
