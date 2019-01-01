<template>
  <div id="app">
    <!-- 

      axios 并发请求
      axios.all([])
     -->
    23232
  </div>
</template>
<script>

export default {
  name:"helloword",
  data(){
    return{

    }
  },
  methods: {
 
    get(){
      this.$http({
        url:"../static/1.txt",
        method:"get"
      }).then((res)=>{
        console.log(res)
      })
      console.log(this.$http());
    }
  },
  methods:{
    getadminuser(){
      return this.$http.get("../static/1.txt")
    },
    getstudentuser(){
      return this.$http.get("../static/2.txt")
    },
    get(){
      //this.$http = axios
      //all  参数传递的可为  迭代函数 或数组 
      this.$http.all([this.getadminuser(),this.getstudentuser()]).then(this.$http.spread((res,data)=>{
        // spread(callback) callback 只有请求执行完毕以后才会执行
      
        console.log(res)
        console.log(data)

        // 具体的案例
        /** 
         * 校验完验证码接口  request
         * 回调函数中执行登录接口
         * 
         * 
        */
        
      }))
    }
  },
  mounted () {
    this.get()
  }
}
</script>
<style>

</style>
