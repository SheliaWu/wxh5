/*
 * @Descripttion: 
 * @version: 
 * @Author: shelia
 * @Date: 2020-08-27 16:49:13
 * @LastEditors: shelia
 * @LastEditTime: 2020-08-27 18:00:02
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
