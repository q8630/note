import Vue from "vue"
import router from "./router"
import App from "./App"
import store from "./store"
new Vue({
    el:'#app',
    router,
    store,
    components:{App},
    template:`<App/>`
})
