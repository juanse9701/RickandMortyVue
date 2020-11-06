import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/characters/:page?',
    alias: '/',
    name: 'Characters',
    component: () => import(/* webpackChunkName: "home" */'../views/Characters.vue')
  },
  {
    path: '/episodes/:page?',
    name: 'Episodes',
    component: () => import(/* webpackChunkName: "episodes" */ '../views/Episodes.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
