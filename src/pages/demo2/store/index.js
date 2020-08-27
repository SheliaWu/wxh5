/*
 * @Descripttion: 
 * @version: 
 * @Author: shelia
 * @Date: 2020-08-27 18:00:38
 * @LastEditors: shelia
 * @LastEditTime: 2020-08-27 18:02:22
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import actions from './actions'

Vue.use(Vuex)

const state = {
  seconds: 10,
  timer: '',
  itemNum: 1,
  questions: [],
  answers: [],
  score: 0,
  showResult: false,
  tips: ['你还是个宝宝，需要从幼儿园读起', '恭喜你，小学毕业啦', '你可以的，在努力一下就超过大多数人啦', '差一点点就可以冲出全宇宙啦', '你是什么神仙人物，都答对啦！'],
  tip: ''
}
export default new Vuex.Store({
  state,
  actions,
  mutations
})