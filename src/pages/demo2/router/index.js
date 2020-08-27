/*
 * @Descripttion: 
 * @version: 
 * @Author: shelia
 * @Date: 2020-08-27 16:49:13
 * @LastEditors: shelia
 * @LastEditTime: 2020-08-27 17:59:26
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('../page/index')
    },
    {
      path: '/more',
      component: () => import('../page/more')
    }
  ]
})
