import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../components/MainLayout.vue'),
    children: [
      { path: '', name: 'Dashboard', component: () => import('../views/Dashboard.vue') },
      { path: 'students', name: 'Students', component: () => import('../views/Students.vue') },
      { path: 'schedule', name: 'Schedule', component: () => import('../views/Schedule.vue') },
      { path: 'plans', name: 'Plans', component: () => import('../views/Plans.vue') },
      { path: 'resources', name: 'Resources', component: () => import('../views/Resources.vue') },
      { path: 'grades', name: 'Grades', component: () => import('../views/Grades.vue') },
      { path: 'analytics', name: 'Analytics', component: () => import('../views/Analytics.vue') },
      { path: 'settings', name: 'Settings', component: () => import('../views/Settings.vue') },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
