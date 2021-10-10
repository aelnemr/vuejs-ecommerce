import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/views/NotFound'
import Home from '@/views/Home'
import Products from "@/views/Products";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/products',
      component: Products
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: NotFound
    },
    {
      path: '*',
      redirect: { name: 'not-found' }
    }
  ]
})
