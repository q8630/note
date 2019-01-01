<template>
  <div class="item">
   
    <div v-if="fatheritem=='home'" class="home">
      <div class="whit">{{level}}</div>
      <div>
        <router-link to="/answer" class="next"></router-link>
      </div>
    </div>
    <div v-if="fatheritem=='answer'" class="answer">
       <div class="home">
      <div class="whit">题目{{itemNum}}</div>    
        <ul>
          <li v-for="(item,index) in itemDetail[itemNum-1].topic_answer" :key="index" @click="checkchoose(index,item.topic_answer_id)">
            <span class="circle" :class="{'choose':choosenum==index}">{{chooseType(index)}}</span>
           <span> {{item.answer_name}}</span>
          </li>
          <!-- <button @click="click" class="btn"></button> -->
        </ul>
      </div>
      <div>
        <div v-if="itemNum<itemDetail.length" @click="nextbtn" class="nextbtn"></div>
        <div v-else class="submit" @click="submit"></div>
      </div>
    </div>
  </div>
</template>

<script>
document.documentElement.style.fontSize=document.documentElement.clientWidth/7.5+"px";//配置移动端字体

import {mapState,mapActions,mapMutations} from "vuex"
export default {
  props:["fatheritem"],
  computed:mapState(["level","itemDetail","itemNum"]),
  mounted(){

  },
  data(){
    return{
      choosenum:null,
      chooseid:0
    }
  },
  methods:{
    chooseType(type){
      switch(type){
        case 0 : return "A"
        case 1 : return "B"
        case 2 : return "C"
        case 3 : return "D"
      }
    },
    checkchoose(index,id){
      // if(){

      // }
      this.choosenum=index
      this.chooseid=id
    },
    submit(){
      this.addNum(this.chooseid)
      this.$router.push("score")
    },
    nextbtn(){
      if(this.choosenum!=null){
        this.choosenum=null;
        this.addNum(this.chooseid);
      }else{
        alert("请选择答案")
      }
    },
    ...mapActions(["addNum"])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .next{
    display: block;
    width: 1.5rem;
    height: 0.8rem;
    background: url("../../static/image/1-4.png") no-repeat;
    background-size: contain;
     position: absolute;
    left: 50%;
    margin-left: -.75rem;
    top: 2.8rem;
  }
  .home,.answer{
    height:7rem;
    background: url("../../static/image/1-1.jpg") no-repeat;
    background-size: cover;
    position: relative;
    width: 4rem;
  }
  .whit{
    color: white;
    font-weight: 500;
    font-size: 0.2rem;
    text-align: center;
    background: url("../../static/image/tip.png") no-repeat;
    width: 1.2rem;
    height: 2.7rem;
    background-size: contain;
    line-height: 3.82rem;
    position: absolute;
    right: .3rem;
  }
  ul li{
  	list-style: none;
    color: white;
    font-weight: 500;
    font-size: 0.2rem;
    text-align: left
  }
  .circle{
  	display: inline-block;
  	width: 0.4rem;
  	height: 0.4rem;
  	text-align: center;
  	line-height: 0.4rem;
  	border: #2C3E50 1px solid;
  	border-radius: 50%;
  	cursor: pointer;
  }
  .choose{
     background: blue
  }
  ul{
    padding-top: 2rem;
    padding-left: .3rem;
  }
  .nextbtn,.submit{
    border: 0;
    background: url("../../static/image/2-2.png");
    height: 0.8rem;
    width: 2rem;
    background-size: 100%;
    position: absolute;
    top: 3.8rem;
  } 
  .submit{
     background: url("../../static/image/3-1.png");
     background-size: cover;
  }
</style>
