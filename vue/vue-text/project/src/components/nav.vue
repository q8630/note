<template>

    <!-- 路由钩子函数
    全局导航守卫
    组件内部导航守卫
    路由独享守卫


     -->

    <div>
        <h1>nav</h1>
     {{$route.params.id}}
    {{msg}}
    <router-link to="/nav/233">组件</router-link>
    <router-link to="/three">three</router-link>
    </div>

</template>
<script>
export default {
    data(){
        return{
            msg:'233jhgg'
        }
    },
    beforeRouteEnter (to, from, next) {
        // console.log(arguments);
        // ...组件渲染时被调用
        //不能被this访问 new Vue()可以进行访问
        next()
    },
    //2.2版本出现
    beforeRouteUpdate (to,from,next){
        // console.log("beforeRouteUpdatae");
        //this能被访问  复用组件 在组件内部进行二次渲染
        this.msg=to.params.id;
        next()
    },
    beforeRouteLeave (to, from, next) {
        // ...
        const answer  = window.confirm("是否跳转？");
        if(answer){
            next()
        }else{
            next(false)
        }
    }
}

</script>
<style>

</style>
