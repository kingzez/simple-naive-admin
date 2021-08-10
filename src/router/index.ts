import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

export const router = createRouter({
  history: createWebHistory(), // todo supplement base url
  routes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
})
