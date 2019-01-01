<template>
    <div>
        <h1>vuex</h1>
    <!--
        vuex是什么？    store
        (集中)状态(state)管理模式     仓库
        状态state    监听getters    分发action=>mutation触发状态

        大型的单页应用 可以由vuex进行数据的管理
     -->
     <!-- mapMutations 的第一种方案 -->
      <!-- <button @click="$store.commit('add',2)">+</button> -->
      <!-- mutation里面的触发 -->
      <!-- <button @click="add">+</button> -->
      <!-- state的第一种取值方案 -->
      <!-- {{$store.state.num}} -->

      {{num}}
      <!-- <button @click="$store.commit('reduce')">-</button> -->
      <!-- mutation里面的触发 -->
      <!-- <button @click="reduce">-</button> -->
        <!-- 以下为action触发 -->
      <button @click="actionAdd">+</button>    
      <button @click="actionReduce">-</button>    
    </div>

</template>
<script>
import {mapState, mapMutations, mapGetters,mapActions} from 'vuex'
export default {
//解构运算符
// state的第二种取值方案
    // 解决vue表单式的复杂逻辑
    // computed: {
    //     num(){
    //         return this.$store.state.num
    //     }
    // },

// state的第三种取值方案
    // computed: {
    //     //扩展运算符  相反 rest   
    //     // 箭头函数 箭头左边指代都是参数 右边指代的是返回值
    //     ...mapState({
    //         num:state=>state.num
    //     })
    // },
    // state的第四种取值方案  mapState映射this.$store
    computed: mapState(['num']),

    //mapMutations 的第二种方案
    // methods: {
    //     //add 通过mapMutations  映射的 this.$store.commit("add")
    //     ...mapMutations(["add","reduce"])
    // }
     //mapMutations 的第三种方案
    // 该方法属于mutation
    //  methods:mapMutations(["add","reduce"]),
    // 该方法属于action
    // methods: {
    //     ...mapActions(['actionAdd'])
    // },
    methods:mapActions(['actionAdd','actionReduce']),
    // getters 第一种方案
    //  computed:{
    //      num(){
    //          return this.$store.getters.num
    //      }
    //  }
      // getters 第二种方案
    // computed:{
    //     ...mapGetters(["num"])
    // },
      // getters 第三种方案
    // computed:mapGetters(['num'])
}

</script>
<style>

</style>
