//获取非行内样式
function getStyle(obj, attr) {
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj, false)[attr];
    }
}

//运动框架
function startMove(obj, json,endFn) {
    clearInterval(obj.timer);
    obj.timer=setInterval(function (){
        for(var attr in json){
            var bStop = true;    //假如，所有都到了 就清空定时器

            var cur=0;

            if(attr=='opacity'){
                cur=Math.round(parseFloat(getStyle(obj, attr))*100);
            }else{
                cur=parseInt(getStyle(obj, attr));
            }
            var speed=(json[attr]-cur)/2;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);

            if(json[attr]!=cur){   //只要又一个不到   就为：false
                bStop =false;
            }

            if(attr=='opacity'){
                obj.style.filter='alpha(opacity:'+(cur+speed)+')';
                obj.style.opacity=(cur+speed)/100;
            }else{
                obj.style[attr]=cur+speed+'px';
            }

        }
        if(bStop == true){
            clearInterval(obj.timer);
            if(endFn){
                endFn();
            }
        }


    }, 30);
}