// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/**
 *
 import 导入 前面 Vue可以随便起名
后面的vue 相当于<script src="./vue.js"></script>
vue-resource ajax请求 vue1.0时代  能用 没有人维护
npm install vue-resource --save
this.$http({})  this.$http.(url,{params:})
this.$http.post({})  this.$http.(url,{params:})
 *
 *
 * */
//导入vue 文件
// improt {xx} from "vue"
// {} 相当于是解构
import Vue from 'vue'
import HelloWorld from './components/HelloWorld'
import App from './App'
import router from './router'
//axios 本身是一个插件 不属于vue
import Axios from "axios"
// 原型结构
Vue.prototype.$http=Axios;

Vue.config.productionTip = false;
// axios 创建实例
Axios.create({
  baseURL:"http://www.baidu.com/",//baseUrl 必须是真实有效(备案)
  timeout:1000, //延时
  headers:{}  //请求头，响应头 对象
});

//redirect 重定向
//全局默认配置
// Axios.defaults.baseURL="http://www.baidu.com/"
// Axios.defaults.timeout=1000
// Axios.defaults.headers.get[""]
// Axios.defaults.headers.post[""]
// 优先级
// 后写的会覆盖默认的

//拦截器
// 请求拦截器 和 响应拦截器
Axios.interceptors.response.use(function(config){
  //config.timeout=100
  //响应之前可以去设置一些配置
  return config
}),function(error){
  //异步处理
  //Promise.reject 错误捕获
  return Promise.reject(error);

};

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
    // 注册组件
  components: { App },
  template: '<App/>'
});

// 全局前置导航守卫
 router.beforeEach((to, from, next) => {
   console.log(to);
 });
//全局后置导航守卫
router.afterEach((to,from)=>{
  "use strict";
  // 销毁一些在当前过程当中不用的变量或数据

});
