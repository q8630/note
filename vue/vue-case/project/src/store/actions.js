export default{
    addNum({commit,state},id){
        commit("remberld",id)
        if(state.itemNum<state.itemDetail.length){
            commit('addItemNum')
        }
    }
}