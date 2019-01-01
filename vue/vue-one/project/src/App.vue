<template>
  <div id="app">
    {{msg}}
    <!-- <img src="./assets/logo.png"> -->

    <!-- router-view显示的是路由里面的内容 -->
    <router-view/>
    <router-view name="first"></router-view>
    <router-view name="two"></router-view>
  </div>
</template>

<script>
/*
import Axios from "axios"

axios

params 设置在get请求 相当于地址栏拼接
post data

*/


export default {
  name: 'App',
  data(){
    return {
      msg:""
    }
  },
  methods: {
    
    get(){
        Axios({
        url:"../static/1.txt",
        method:"get",
        params:{
          veri:1
        }
      }).then((res)=>{
        this.msg=res.data
      }).catch((error)=>{
        //捕获错误
        console.log(error);        
      })
      // 综合型请求
      // this.$http({
      //   url:"../static/1.txt",
      //   method:"get",
      //   params:{
      //     veri:1
      //   }
      // }).then((res)=>{
      //   this.msg=res.data
      // }).catch((error)=>{

      //   //捕获错误
      //   console.log(error);
        
      // })

//  get 的快捷方式  无参数传递时

    // this.$http.get("../static/1.txt",{
    //   params:""
    // }).then((res)=>{
    //   console.log(res);
    // })
    // // post 同理{} 和综合型的data:{}是相等的
    // this.$http.post("../static/1.txt",{
    //   username:"",
    //   passwodr:""
    // }).then((res)=>{
    //   console.log(res);
    // })
    }
  },
  mounted () {
    this.get
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
