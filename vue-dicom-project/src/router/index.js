import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import IndexList from '@/components/IndexList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Index
    },
    {
      path: '/list',
      name: 'list',
      component: IndexList
    }
  ]
})
