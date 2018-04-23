import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Request from '@/views/Request'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: HelloWorld
  }, {
    path: '/requestTest',
    name: 'request',
    component: Request
  }, {
    path: '/userTest', 
    name: 'user',
    component: User
  }]
})