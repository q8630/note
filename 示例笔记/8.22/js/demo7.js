/**
 * Created by Administrator on 2018/8/22.
 */
//1、找人
//2、绑定事件
btn1.onclick = function(){
//3、书写事件驱动
//    如果这个div是隐藏的
//   那么就让他显示 否则就隐藏
//    js通过style 操作的是 行内样式
//    console.log(div1.style.display);
    if(div1.style.display == 'none'){
        div1.style.display = 'block';
    }else{
        div1.style.display = 'none';
    }



}