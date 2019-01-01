import Vue from "vue"
import VueRouter from "vue-router"
import App from "../App"

Vue.use(VueRouter)

export default new VueRouter({
    mode:"history",
    routes:[
        {
            path:"/",
            component:App,
            children:[
                {
                    path:"home",  //render
                    // require.ensure  代码分割
                    //  懒加载  npm run build dist文件的大小会变小
                    component:r=>require.ensure([],()=>r(require("../page/home")),"home")
                },
                {
                    path:"answer",
                    component:r=>require.ensure([],()=>r(require("../page/answer")),"answer")
                },
                {
                    path:"score",
                    component:r=>require.ensure([],()=>r(require("../page/score")),"score")
                },
            ],
            redirect:"/home"
        }
    ]
})