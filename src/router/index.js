import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tasklist',
      name: 'todo',
      component: () => import('../views/TaskList.vue')
    },
    {
      path: '/create-task',
      name: 'createTask',
      component: () => import('../views/CreateTask.vue'),
    },
    {
      path: '/edit-task/:taskId',
      name: 'editTask',
      component: () => import('../views/EditTask.vue'),
    },
    
  
    
  ]
})

export default router
