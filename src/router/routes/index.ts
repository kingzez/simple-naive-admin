import Layout from '@/layouts/index.vue'

export const asyncRoutes = []

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/about',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/about/index.vue'),
        meta: { title: 'About', icon: '' }
      }
    ]
  },
]