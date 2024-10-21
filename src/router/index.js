import { createRouter, createWebHistory } from 'vue-router'
import LayoutPattern from '@/layout/LayoutPattern.vue'
import LoginView from '@/views/LoginView.vue'
import HelloView from '@/views/HelloView.vue'

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
        },
        {
          path: 'helloworld',
          name: 'HelloWorld',
          component: HelloView
        },
      ]
    },
  ]
})

export default router
