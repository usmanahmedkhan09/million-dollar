import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import SignIn from '../views/authentication/SignIn.vue'
import SignUp from '../views/authentication/SignUp.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/sign-in',
    name: 'Sign-in',
    component: SignIn
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/',
    name: 'Dashboard',
    redirect: { name: 'dashboard-info' },
    component: () => import('../views/dashboard/index.vue'),
    children: [
      {
        path: "/",
        name: 'dashboard-info',
        component: () => import('../views/dashboard/dashboard-info.vue'),
      },
      {
        path: "/drivers-info",
        name: 'drivers-info',
        component: () => import('../views/drivers/drivers-info.vue'),
      },
    ],
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
