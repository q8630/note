
//封装  函数：自执行函数

/*var docEl=document.documentElement;
docEl.style.fontSize = docEl.clientWidth/7.5+'px';

    doc = document   addEventListener()    DOMContentLoaded

window   orientationchange  事件=>屏幕翻转   reload()


meta
事件
    案例
    qq列表
    轮播图

兼容性
移动端库或框架

domcontentloaded
 resize()
 reload()
*/
(function (doc,win){

   var docEl = doc.documentElement;
    //设备重置
    resizeEvt = "orientationchange" in window ? "orientationchange" :'resize';

    relalc = function(){
        //  获取屏幕宽度

        var cletentWith = docEl.clientWidth;

        if(!cletentWith) return;
        //设计稿 750  7.5
        docEl.style.fontSize = cletentWith/7.5+'px';
    };

    if(!addEventListener) return;
    win.addEventListener(resizeEvt,relalc,false);
    doc.addEventListener('DOMContentLoaded',relalc,false)

})(document,window);

//如果开发的是webapp时  不能采用，单独移动端可以使用。

(function(){
    var w = window.screen.width;
    var target = 750; // 280 320 480 640 750
    var scale = target/w;
    var meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'initial-scale = '+scale+',minimum-scale='+scale+'user-scalable =no';
    document.head.appendChild(meta);
    // window.orientationchange();
})();