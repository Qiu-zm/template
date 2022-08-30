import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/layouts/index'),
    redirect: '/home',
    meta: {
      title: '首页',
      keepAlive: false
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/tabbar/Home'),
        meta: { title: '首页', keepAlive: false }
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/tabbar/About'),
        meta: { title: '关于我', keepAlive: false }
      },
      {
        path: '/menu',
        name: 'Menu',
        component: () => import('@/views/tabbar/Menu'),
        meta: { title: '关于我', keepAlive: false }
      },
      {
        path: '/my',
        name: 'My',
        component: () => import('@/views/tabbar/My'),
        meta: { title: '关于我', keepAlive: false }
      }

    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
