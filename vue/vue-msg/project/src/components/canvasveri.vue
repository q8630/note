<template>
    <div>
        <!-- 画布 标签  js作为基础 width height -->
        <canvas id='canvas' width="150" height="50" @click="getPic"></canvas>
    </div>
</template>
<script>

export default {
    // js语句 
    name:'veri',
    data() {
        return {
            // 获取到canvas元素
            canvas:'',
            // 绘图环境
            ctx:'',
            //canvas 的宽度
            width:'',
            // canvas 的高度
            height:''
        }
    },
    methods: {
        randomNum(max,min){
            return Math.ceil(Math.random()*(max-min)+min)
        },
        randomColor(max,min){
            var r = this.randomNum(max,min)
            var g = this.randomNum(max,min)
            var b = this.randomNum(max,min)
            return 'rgb('+r+','+g+','+b+')'
        },
        getPic(){
            this.$Axios({
                url:'/api/Handler/AdminHandler?type=veri',
                method:'get',
                // responseType:'json'  默认
            }).then((result)=>{
                this.drawpic(result.data.data)
                // console.log(result)
            })
        },
        drawpic(data){
              this.ctx.clearRect(0,0,this.width,this.height)
              // 线 line lineTo  moveTo
       //   this.ctx.strokeStyle = this.randomColor(25,88)
           this.ctx.fillStyle = this.randomColor(0,255)
         //rect 创建矩形 读取临近色
        // fillRect() 绘制被填充
        // strokeRect() 绘制未填充的
        // 默认是矩形颜色为黑色 
        this.ctx.fillRect(0,0,this.width,this.height)
        for(var i=0; i<10; i++){
            //开启画笔
            this.ctx.beginPath()
        //起点 终点
            this.ctx.strokeStyle=this.randomColor(50,150)
            this.ctx.moveTo(this.randomNum(this.width,0),this.randomNum(this.height,0)),
            this.ctx.lineTo(this.randomNum(this.width,0),this.randomNum(this.height,0)),
            this.ctx.stroke(),
                // 关闭画笔
            this.ctx.closePath()
        }
        //点 干扰点 实心圆  空心圆 
        for(var i=0; i<20; i++){
             this.ctx.beginPath()
            //填充颜色
            this.ctx.fillStyle=this.randomColor(0,244)
            this.ctx.arc(this.randomNum(0,this.width),this.randomNum(0,this.height),.6,0,2*Math.PI,false)
            this.ctx.strokeStyle=this.randomColor(0,244)
            this.ctx.stroke()
            this.ctx.closePath()
        }
        //文字
        // var pool="ABCDEFGHIJKLIMNOPQRSTUVWSYZ1234567890";
        for(var i=0;i<data.length;i++){
            // var c=data[this.randomNum(36,0)];//随机的字
            var fs=this.randomNum(18,40);//字体的大小
            var deg=this.randomNum(-30,30);//字体的旋转角度
            this.ctx.font=fs+'px Simhei';
            this.ctx.textBaseline="top";
            this.ctx.fillStyle=this.randomColor(80,150);
            this.ctx.save();
            this.ctx.translate(30*i+15,15);
            this.ctx.rotate(deg*Math.PI/180);
            this.ctx.fillText(data[i],0,0);
            this.ctx.restore();
	        }
        }
    },
    mounted () {
        // 获取元素
        this.canvas=document.getElementById('canvas')
        //绘图环境  three.js    d3.js   vr 3d浏览器不支持 (需要引擎)
        this.ctx = this.canvas.getContext('2d')
        this.width = this.canvas.width
        this.height = this.canvas.height
        // 矩形  线  背景颜色  点  文字  
        
        //fillStyle 填充颜色
        // this.ctx.fillStyle = "#0f0"
    
        // this.drawpic()
       
        this.getPic()
         
    }
}
</script>
<style>
    
</style>