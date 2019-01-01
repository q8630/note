<template>
    <div>
        <h1>two</h1>
        <div>
            <!-- <router-link to="/two/twoone">firstone</router-link> -->
            <router-link to="/two/23/second?username=tom&age=12">firsttwo</router-link> 

            <!-- 动态路由绑定 -->
            <!-- 动态路由传参 -->
            <!-- <router-link :to="{'path':'/two/twoone'}">firstone</router-link> -->
            {{$route.params.id}}
        </div>
        <div >{{a}}</div>
        <router-view></router-view>
    </div>
</template>
<script>

    export default {
        props:["id"],
        // data () {
        //     return {
        //         a:''
        //     }
        // },
        // mounted() {
        //     // 和data结合使用
        //     this.a=this.$route.props.id
        // },
        computed: {
            // a 不是函数，它只是get()获取最新值实时计算
            a(){
                return this.$route.params.id
            }
        },

    }

</script>
<style>
    
</style>