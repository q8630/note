//获取非行内样式
function getStyle(obj, name) {
    if(obj.currentStyle){
        return obj.currentStyle[name];
    }else{
        return getComputedStyle(obj, false)[name];
    }
}


// var json = {"width":"400", "height":"400"}
// alert(json["width"])

//运动框架
function startMove(obj, json,endFn) {
    clearInterval(obj.timer);
    obj.timer=setInterval(function (){
        // for(var i=0;i<json.length;i++){}    //json 的循环 要用for in  因为 他没有length

        for(var attr in json){

            var cur=0;

            if(attr=='opacity'){
                cur=Math.round(parseFloat(getStyle(obj, attr))*100);
            }else{
                cur=parseInt(getStyle(obj, attr));
            }
            var speed=(json[attr]-cur)/6;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);

            if(cur==json[attr]){
                clearInterval(obj.timer);
                if(endFn){
                    endFn();
                }
            }else{
                if(attr=='opacity'){
                    obj.style.filter='alpha(opacity:'+(cur+speed)+')';
                    obj.style.opacity=(cur+speed)/100;
                    document.getElementById('txt1').value=obj.style.opacity;
                }else{
                    obj.style[attr]=cur+speed+'px';
                }
            }
        }


    }, 30);
}