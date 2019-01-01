<template>
<!--
    computed    计算属性    watch
    应用场景
    vue表达式如果逻辑复杂会显得页面语法较为臃肿

 -->
 <div>
    <h1>第一个案例</h1>
    <h2>{{msg}}</h2>
    <h2>{{msg.split(";").reverse().join(",")}}</h2>
    <h2>{{reversemsg}}</h2>
    <h1>第二个案例</h1>
    <h2>{{arr.price}}*{{arrcake.price}}={{arr.price*arrcake.price}}</h2>
    <h2>{{total}}</h2>
    <h1>第三个案例</h1>
    <h2>{{newTotal}}</h2>
 </div>




</template>
<script>


export default {
    data() {
        return {
            msg:'1;2;3',
            newPrice:"2222",
            num:2,
            arr:
                {
                    name:"bread",
                    price:22
                }
            ,
            arrcake:
                {
                    name:"cake",
                    price:223
                }

        }
    },
    computed: {
        //  getter() setter()
        reversemsg(){
            return this.msg.split(";").reverse().join(",")
        },
        total(){
            return this.arr.price+"*"+this.arrcake.price +"="+this.arr.price*this.arrcake.price
        },

        newTotal:{
            get(){ // 读取
                return this.newPrice*this.num
            },
            set(){  //写入  基本上不需要设置，除非
                var a=val.split(",")
                this.newPrice=a[0]
                this.num=a[1]
            }
        }
    }
}
</script>
<style>

</style>
