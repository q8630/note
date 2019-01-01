// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Element from 'element-ui'
import Axios from "axios"
import '../node_modules/element-ui/lib/theme-chalk/index.css'
Vue.use(Element)
Vue.config.productionTip = false

Vue.prototype.$Axios = Axios


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
})
