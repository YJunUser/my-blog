import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/text',
    name: 'TextCom',
    component: () => import('@/views/text/index.vue')
  },
  {
    path: '/collection',
    name: 'Collection',
    component: () => import('@/views/collection/index.vue')
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('@/views/help/index.vue')
  }
]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes
})

export default router
