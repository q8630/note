/**
 * Created by 雨 on 2018/7/15.
 */

var oScreenBanner = document.getElementById('screen-banner');
var oAllScreen = oScreenBanner.children;
var arrScreen = oAllScreen.children;
var screenW, screenH;
var page = 0;
function resize(){
    //获取屏幕宽高
    screenH = document.documentElement.clientHeight;
    screenW = document.documentElement.clientWidth;
    //  设置宽高    总轮播图    大盒子     每一屏
    oAllScreen.style.width = oScreenBanner.style.width = screenW + 'px';
    oScreenBanner.style.height = screenH + 'px';
    oAllScreen.style.height = screenH * arrScreen.length + 'px';
    for (var i = 0; i < arrScreen.length; i++){
        arrScreen[i].style.width = screenW + 'px';
        arrScreen[i].style.height = screenH + 'px';
    }

    oAllScreen.style.top = -page * screenH + 'px';
}
resize();
window.onresize = resize;


var ul = document.getElementsByTagName('ul')[0];
var arrLi = ul.children;

//          文档碎片  减少dom回流  减少性能消耗
var flag = document.createDocumentFragment();
for (var i = 0; i < arrScreen.length; i++) {
    var li = document.createElement('li');
    flag.appendChild(li);
}
ul.appendChild(flag);
arrLi[0].classList.add('now');

//            节流阀 阀门关闭
var isRunning = false;
//当isRunning 为true 鼠标滚轴不管事
//当isRunning 为false 鼠标滚轴管事
function scrollUp(){
    if(!isRunning){
        isRunning = true;
        //设置定时器 当1秒之后 滚轴可以继续使用
        setTimeout(function(){
            isRunning = false;
        },1000);
        if (page > 0){
            page--;
            for(var j=0;j<arrScreen.length;j++){
                arrLi[j].classList.remove('now');
            }
            arrLi[page].classList.add('now');
            oAllScreen.style.top = -page * screenH + 'px';
        }
    }
}

function  scrollDown(){
    if(!isRunning) {
        isRunning = true;
        setTimeout(function(){
            isRunning = false;

        },1000);
        if (page < arrScreen.length - 1) {
            page++;
            for(var j=0;j<arrScreen.length;j++){
                arrLi[j].classList.remove('now');
            }
            arrLi[page].classList.add('now');
            oAllScreen.style.top = -page * screenH + "px";
        }
    }
}

//除火狐
addEvent(window,'mousewheel',mouseWheel);
//火狐
addEvent(window,'DOMMouseScroll',mouseWheel);

//      滚轴事件函数
function  mouseWheel(ev){
    var oEvent = window.event || ev;
    if (oEvent.detail){
        if (oEvent.detail > 0){
            scrollDown()
        }else{
            scrollUp()
        }
    }else if (oEvent.wheelDelta) {// chrome ie
        if (oEvent.wheelDelta > 0) {  // 上滚动
            scrollUp()
        } else {   //   向下
            scrollDown()
        }
    }
}
function addEvent(ele, type, listener){
    if (ele.addEventListener){
        ele.addEventListener(type, listener);
    }else{
        ele.attachEvent('on' + type, listener);
    }
}

for (var j = 0 ; j < arrLi.length;j++){
    arrLi[j].onclick = function(){
        for (var k = 0 ; k < arrLi.length; k++){
            arrLi[k].classList.remove('now');
        }
        arrLi[i].classList.add('now');
        oAllScreen.style.top = -i * screenH + 'px';
        page = i;
    }
}
