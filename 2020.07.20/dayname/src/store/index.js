import Vue from 'vue'
import Vuex from 'vuex'

import zhird from './zbird'
import Abstain from './modules/abstain_store'
import Diamond from './modules/Diamond'
import Fang from './modules/my_fang'
import wedding from './modules/wedding'
Vue.use(Vuex);

export default new Vuex.Store({
  modules:{//modules 属性 引入所有子模块
    zhird,
    Abstain,
    Diamond,
    Fang,
    wedding,   //陈明的婚戒
  }
})
