import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/documentation',
    name: 'docs',
    component: () => import(/* webpackChunkName: "about" */ '../views/DocumentationView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: function(to, from, savedPosition) {
    if (to.hash) {
      
        //Or for Vue 3:
        return {el: to.hash, top: 15,}
    } else {
        return { x: 0, y: 0 }
    }
},
})

export default router
