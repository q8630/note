$(function () {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
});
window.onload=function(){
    var oDiv =document.getElementsByClassName('banner_wrap');
    var oPrev =document.getElementsByClassName('prev')[0];
    var oNext =document.getElementsByClassName('next')[0];
    var aSpan =document.querySelectorAll('.banner_wrap .middle span');
    var aImg=document.querySelectorAll('.banner_one');


    for(var i=0;i<aSpan.length;i++){
        aSpan[i].index=i;
        aSpan[i].onclick=function(){
            for(var j=0;j<aImg.length;j++){
                aSpan[j].classList.remove('now')
                aImg[j].style.display='none';
            }
            aSpan[this.index].classList.add('now');
            aImg[this.index].style.display='block';
        }
    };
    var number=0;
    oNext.onclick=function(){
        if(number<aSpan.length-1){
            number++;
        }else {
            number=0
        }

        for(var j=0;j<aImg.length;j++){
            aSpan[j].classList.remove('now')
            aImg[j].style.display='none';
        }
        aSpan[number].classList.add('now');
        aImg[number].style.display='block';
    };
    oPrev.onclick=function(){
        if(number<=0){
            number=aSpan.length-1
        }else{
            number--;
        }

        for(var j=0;j<aImg.length;j++){
            aSpan[j].classList.remove('now')
            aImg[j].style.display='none';
        }
        aSpan[number].classList.add('now');
        aImg[number].style.display='block';
    };
    var aContents =document.getElementsByClassName('contents')[0];
    var aNow_line =document.getElementsByClassName("now_line")[0];
    var oPrev1 =document.getElementsByClassName('prev')[1];
    var oNext1 =document.getElementsByClassName('next')[1];
    var oContent_one =aContents.querySelectorAll(".content_one");
    var oNow_linebtn_one=aNow_line.querySelectorAll("div");


    for (var i=0;i<oNow_linebtn_one.length;i++){
        oNow_linebtn_one[i].index=i;
        oNow_linebtn_one[i].onclick=function(){

            for (var j=0;j<oContent_one.length;j++){
                oNow_linebtn_one[j].classList.remove("now");
                oContent_one[j].style.display="none";
            }
            oNow_linebtn_one[this.index].classList.add("now");
            oContent_one[this.index].style.display="block";
        }

    }
    var a=0;
    oNext1.onclick=function(){
        if(a<oNow_linebtn_one.length-1){
            a++;
        }else {
            a=0
        }

        for(var j=0;j<oContent_one.length;j++){
            oNow_linebtn_one[j].classList.remove('now')
            oContent_one[j].style.display='none';
        }
        oNow_linebtn_one[a].classList.add('now');
        oContent_one[a].style.display='block';
    };
    oPrev1.onclick=function(){
        if(a<=0){
            a=oNow_linebtn_one.length-1
        }else{
            a--;
        }

        for(var j=0;j<oContent_one.length;j++){
            oNow_linebtn_one[j].classList.remove('now')
            oContent_one[j].style.display='none';
        }
        oNow_linebtn_one[a].classList.add('now');
        oContent_one[a].style.display='block';
    };



    var oTeammove_wrap=document.getElementsByClassName("teammove_wrap")[0];
    //1号盒子
    var oTeam_move=document.getElementsByClassName('team_move')[0];
    // 2号盒子
    var oTwoteam_wrap=document.getElementsByClassName('twoteam_wrap')[0];
    //3号盒子
    var oMiddle=document.getElementsByClassName('middle')[1];
    //点点盒子
    var aSpan1=oMiddle.querySelectorAll('span');
      // 点点
    var oPrev2 =document.getElementsByClassName('prev')[3];
    //左边按钮
    var oNext2 =document.getElementsByClassName('next')[3];
    //右边按钮
    var len = oTwoteam_wrap.length;
    var index = -1;
    oPrev2.onclick = function () {
        //如果 $(".daBox") 在做动画，那么就把事件 return 掉
        if ($(".oTeam_move").is(':animated')) {
            return;
        }
        index--;
        if(index==-len){
            index=-len+3;     //-2
            oTeam_move.style.left= ((index+1)*533 )+"px";
        }
        $(".oTeam_move").animate({"left":index * 533 +"px"},500)    //自定义动画方法
        for (var j = 0; j < aSpan1.length; j++) {
            aSpan1[j].classList.remove('now');
        }
        console.log(index);
        var aaa = index;
        if(aaa==-4){
            aaa=-1
        }
        aSpan1[-aaa-1].classList.add('now');

    };


    oNext2.onclick = function () {
        if ($(".oTeam_move").is(':animated')) {
            return;
        }
        index++;
        if(index>0){
            index=-len+3;          //-2
            oTeam_move.style.left= ((index+1)*533 )+"px";
        }
        $(".oTeam_move").animate({"left":index * 533 +"px"},500)    //自定义动画方法


        for (var j = 0; j < aSpan1.length; j++) {
            aSpan1[j].classList.remove('now');
        }
        //console.log(index);
        var aaa = index;
        if(aaa==0){
            aaa=-3
        }
        aSpan1[-aaa-1].classList.add('now');

    }


    for (var i = 0; i < aSpan1.length; i++) {

        aSpan1[i].number = i;
        aSpan1[i].onmouseover = function () {
//            if ($(".daBox").is(':animated')) {
//                return;
//            }
            index = -this.number-1;
            $(".oTeam_move").animate({"left":index * 533 +"px"},500)    //自定义动画方法

            for (var j = 0; j < aSpan1.length; j++) {

                aSpan1[j].classList.remove('now');
            }

            this.classList.add('now');

        }
    }

    timer();
    var time ;
    function timer() {
        time = setInterval(function () {
            index--;
            if(index==-len){
                index=-len+3;     //-2
                oTeam_move.style.left= ((index+1)*533 )+"px";
            }
            $("#oTeam_move").animate({"left":index * 533 +"px"},500)    //自定义动画方法

            for (var j = 0; j < aSpan1.length; j++) {
                aSpan1[j].classList.remove('now');
            }
            //console.log(index);
            var aaa = index;
            if(aaa==-4){
                aaa=-1
            }
            //aSpan1[-aaa-1].classList.add('now');
        },2000)
    }
    oTeammove_wrap.onmouseover = function () {
        clearInterval(time)
    }
    oTeammove_wrap.onmouseout = function () {
        timer();
    }

};



