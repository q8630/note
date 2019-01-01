import Vue from 'vue'
import Router from 'vue-router'
import first from '../components/first'
import two from '../components/two'
import three from '../components/three'
import view from '../components/view'
import com from '../components/com'
import Nav from '../components/nav'
import Vuex from '../components/vuex'

// 一下文件作为two组件的二级路由
import firstone from '../components/firstone'
import firsttwo from '../components/firsttwo'
// import one from '../components/one'

Vue.use(Router)
/** 
 * http://localhost:8080/two#/  回归到默认视图
 * http://localhost:8080/#/two/ 新视图
 * 
 * vue路由默认的跳转方式是 hash #
 * history  上线时 
 * window.history
 * 传到服务器上时，页面打开以后会显示空白
 * 因为路径取不到
 * 解决方案：Apache nginx Node
 * 后端进行路径的配置
*/

// var token = localStorage.setItem(id,1)



export default new Router({
  //去掉hash的#
  mode:"history", // hash  html5=>histroy
  routes: [
    {
      path: '/',
      name: 'first', //命名式路由
      component: first,
      // 把当前的路由视图切换到 重定向后的视图
      redirect:"com" // 重定向
    },
    {
      path: '/two/:id',
      name: 'two',  //命名式路由
      component: two,
      //运行props 进行值的传输
      //布尔模式
      // props:true,
      // 对象模式
      props: { a: false },
      children:[
        {
          path:"twoone",
          component:firstone,
        },
        {
          path:"second",
          component:firsttwo,
        },
      ]
    },
    {
      path:"/three",
      name:"third", //命名式路由
      component:three,
      //别名配置  alias可以对当前路由组件的名称进行更改
      alias:"/aaa"
    },
    {
      path:"/view",
      name:"view", //命名式路由
      components:{
        //default 默认  view组件
        default:view,
        first:first,
        two:two
    }
    },
    {
      // 主页
      path:'/com',
      component:com,
      meta:{
        // 码符   签名：支付 =>支付宝支付
        // localStorage.getItem(id)
        token:1
      },
      // 路由独享守卫 
      beforeEnter(to,from,next){
        console.log(to)
        console.log(from)
        // assign  路由元信息
        if(to.meta.token!=1){
          // to.path={}
          next({
            path:"/nav"
          })
        }
        next()
        
      }
    },
    {
      //登录
      path:'/nav/:id',
      component:Nav,
      meta:{
        token:1
      },
      beforeEnter(to,from,next){
        next()
      }
    },
    {
      path:"/vuex",
      component:Vuex
    }

  ]
})
