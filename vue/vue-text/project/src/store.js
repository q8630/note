
// vuex是什么？    store
// 状态(state)管理模式     仓库
// 状态state    监听getters    分发action
//mutation触发状态
import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);
const state={
    num:1,
    getAdminlist:[]
};

     // mutation 不能直接修改状态  
     // 它需要vuex里面Vuex.store的mutations去修改状态
     // 包含一个回调函数  type 通过回调函数只的state去修改state下面的状态值
     // $store.commit(回调函数)     handler
const mutations={
    add(state){
        state.num++
    },
    reduce(state){
      state.num--
    }
};
// 状态管理模式(vuex)   里面的计算属性  事时监听 
const getters={
    num(state){
        return state.num
    }
}
//actions 分发 对mutations的值进行分发 =>各个组件
const actions={
    //
    actionAdd({commit}){
        commit('add')
    },
    actionReduce(context){
        context.commit('add')
    }
}
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
