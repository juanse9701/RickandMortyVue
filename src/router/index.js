import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/characters',
    alias: '/',
    name: 'Characters',
    component: () => import(/* webpackChunkName: "home" */'../views/Characters.vue')
  },
  {
    path: '/episodes',
    name: 'Episodes',
    component: () => import(/* webpackChunkName: "episodes" */ '../views/Episodes.vue')
  },
  {
    path: '/locations',
    name: 'Locations',
    component: () => import(/* webpackChunkName: "locations" */ '../views/Locations.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
