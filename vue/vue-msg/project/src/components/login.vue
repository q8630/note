<template>
    <div>login.vue
        <el-input placeholder="请输入内容" ></el-input>
        <el-input placeholder="请输入内容" ></el-input>
        <el-input placeholder="请输入内容" v-model="code"></el-input>
        <veri></veri>
        <el-row>
            <el-button type="primary" @click="login">登录</el-button>
        </el-row>

    </div>
</template>
<script>
import veri from './canvasveri'
export default {
    components:{veri},
    data(){
        return{
            code:""
        }
    },
    methods: {
        login(){
            this.$Axios({
                 url:'/api/Handler/AdminHandler?type=checkveri&veri='+this.code,
                 method:"get",
                //  params:{
                //      veri:this.code
                //  }
            })
        }
    },
}
</script>
<style>
.el-input{
    width: 50%;
}
</style>