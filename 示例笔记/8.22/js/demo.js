/**
 * Created by Administrator on 2018/8/22.
 */
window.onload = function(){
    //    1、找元素
    var oDiv1 = document.getElementById('div1'),
        oDiv2 = document.getElementById('div2');
    console.log(oDiv1);
    //    2、绑定事件
    oDiv1.onmouseover = function () {
        oDiv2.style.display = 'block';
    };
    oDiv1.onmouseout = function () {
        oDiv2.style.display = 'none';
    }

}