<template>
    <div class="score">
        {{msg}}
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    computed:mapState(['answerid']),
    data(){
        return{
            msg:0,
            aid:[2,7,12,13,18]
        }
    },
    methods: {
        panduan(){
            this.aid.forEach((item,index) => {
                if(item == this.answerid[index]){
                    this.msg+=20
                }
            });
        }
    },
    mounted() {
        this.panduan()
    },
}
</script>
<style scope>
.score{
    height:7rem;
    background: url("../../static/image/1-1.jpg") no-repeat;
    background-size: cover;
    position: relative;
    width: 4rem;
}
</style>
