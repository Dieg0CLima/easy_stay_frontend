import { createRouter, createWebHistory } from 'vue-router'
import LayoutPattern from '@/layout/LayoutPattern.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login',
      component: LayoutPattern,
      children: [
        {
          path: 'login',
          name: 'login',
          component: LoginView
        }
      ]
    },
  ]
})

export default router
