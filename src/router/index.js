import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/Home'
import User from '@/views/user/User'
import Login from '@/views/login/Login'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/user', component: User },
  { path: '/login', component: Login }

]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (to.path === '/user') {
    const token = localStorage.getItem('token')
    if (token) { next() } else { next('/login') }
  } else { next() }
})
export default router
