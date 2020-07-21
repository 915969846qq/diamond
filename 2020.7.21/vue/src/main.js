// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'   

//ui 全局样式
import ElementUi from 'element-ui'  
import 'element-ui/lib/theme-chalk/index.css'  
Vue.use(ElementUi)    

//引用jquery
import $ from 'jquery'

import store from './store/index'
import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false
Vue.prototype.$axios=axios;
Vue.prototype.$host="http://localhost:1001/";     

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,       
  store,
  $,
  components: { App },
  template: '<App/>'
})
