/*
 * @Descripttion:
 * @version:
 * @Author: shelia
 * @Date: 2020-08-27 18:00:38
 * @LastEditors: shelia
 * @LastEditTime: 2020-08-28 18:21:15
 */
import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutation';
import actions from './actions';

Vue.use(Vuex);

const state = {
  hasRedirected: false,
};
export default new Vuex.Store({
  state,
  actions,
  mutations,
});
