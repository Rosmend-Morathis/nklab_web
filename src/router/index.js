import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView'
import MainPageView from '../views/MainPageView'


const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/main',
    name: 'mainpage',
    component: MainPageView
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
