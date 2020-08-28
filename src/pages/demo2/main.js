/*
 * @Descripttion:
 * @version:
 * @Author: shelia
 * @Date: 2020-08-27 16:49:13
 * @LastEditors: shelia
 * @LastEditTime: 2020-08-28 17:55:46
 */
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
