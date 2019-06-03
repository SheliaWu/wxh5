import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/common/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'This is a test project!!!',
      component: HelloWorld
    }
  ]
})
