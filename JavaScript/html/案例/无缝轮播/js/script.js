
window.onload = function () {
    var oBox = document.getElementById("box");
    var oList = document.getElementById("list");
    var oLi = oList.getElementsByTagName("li");

    var oBtn_box = document.getElementById("btn_box");
    var oSpan = oBtn_box.getElementsByTagName("span");

    var oBtnL = document.getElementById("btnL");
    var oBtnR = document.getElementById("btnR");


    var number = -400;    //整个UL的left值
    var timer;


    oBtnL.onclick = function () {
        if(number>-2800){
            number-=400;
        }else{
            number=-400;
            oList.style.left = 0+"px"
        }
        startMove(oList, {"left":number})
        console.log(number);

        var index =  Math.abs(number/400)-1;


        console.log(index);

        for(var i=0; i<oSpan.length;i++){
            oSpan[i].style.backgroundColor = "#fff";
        }
        oSpan[index].style.backgroundColor = "#f00";

    }


    oBtnR.onclick = function () {
        if(number<0){
            number+=400;
        }else{
            number=-2400;
            oList.style.left = -2800+"px"
        }
        startMove(oList, {"left":number})
        console.log(number);



        var index =  Math.abs(number/400)-1;
        if(index==-1){
            index=6
        }
        console.log(index);
        for(var i=0; i<oSpan.length;i++){
            oSpan[i].style.backgroundColor = "#fff";
        }
        oSpan[index].style.backgroundColor = "#f00";

    }


    for(var i=0; i<oSpan.length;i++){
        oSpan[i].index = i;
        oSpan[i].onmouseover = function () {

            for(var i=0; i<oSpan.length;i++){
                oSpan[i].style.backgroundColor = "#fff";
            }
            this.style.backgroundColor = "#f00";

            var num = this.index+1;
            number = num*-400;
            startMove(oList, {"left":number})

        }
    }
    setin();
    function setin() {
        timer = setInterval(function () {
            if(number>-2800){
                number-=400;
            }else{
                number=-400;
                oList.style.left = 0+"px"
            }
            startMove(oList, {"left":number})
            console.log(number);

            var index =  Math.abs(number/400)-1;


            console.log(index);

            for(var i=0; i<oSpan.length;i++){
                oSpan[i].style.backgroundColor = "#fff";
            }
            oSpan[index].style.backgroundColor = "#f00";

        },2000)

    }


    oBox.onmouseover = function () {
        clearInterval(timer)
    }


    oBox.onmouseout = function () {
        setin();
    }









/*
var index = 0;
    oBtnL.onclick = function () {

        if(number>-2800){
            number-=400;
            startMove(oList, {"left":number})
        }else{
            oList.style.left = 0+"px";
            startMove(oList, {"left":"-400"});
            number=-400;
        }

        console.log(number);
        //oList    left     -400

        // index = Math.abs(number/400)-1;
        // console.log(Math.abs(number / 400)-1);
        // for(var i=0;i<oSpan.length;i++){
        //     oSpan[i].style.backgroundColor = "#fff";
        // }
        // oSpan[index].style.backgroundColor = "#f00";





    }






    oBtnR.onclick = function () {

        if(number<0){
            number+=400;
            startMove(oList, {"left":number})
        }else{
            oList.style.left = -2800+"px";
            startMove(oList, {"left":"-2400"});
            number=-2400;
        }

        console.log(number);
        //oList    left     -400

        // index = Math.abs(number/400)-1;
        // console.log(Math.abs(number / 400)-1);
        // if(index==-1){
        //     index=6
        // }
        // for(var i=0;i<oSpan.length;i++){
        //     oSpan[i].style.backgroundColor = "#fff";
        // }
        // oSpan[index].style.backgroundColor = "#f00";


    }


    for(var i=0;i<oSpan.length;i++){
        oSpan[i].index = i;
        oSpan[i].onmouseover = function () {
            for(var i=0;i<oSpan.length;i++){
                oSpan[i].style.backgroundColor = "#fff";
            }
            this.style.backgroundColor = "#f00";

            number = this.index*-400

            if(number>-2800){
                number-=400;
                startMove(oList, {"left":number})
            }else{
                oList.style.left = 0+"px";
                startMove(oList, {"left":"-400"});
                number=-400;
            }

            console.log(number);

        }

    }
*/

    //
    // setin();
    // var timer;
    // function setin() {
    //     timer = setInterval(function () {
    //
    //         if(number>-2800){
    //             number-=400;
    //             startMove(oList, {"left":number})
    //         }else{
    //             oList.style.left = 0+"px";
    //             startMove(oList, {"left":"-400"});
    //             number=-400;
    //         }
    //
    //         console.log(number);
    //         //oList    left     -400
    //
    //         index = Math.abs(number/400)-1;
    //         console.log(Math.abs(number / 400)-1);
    //         for(var i=0;i<oSpan.length;i++){
    //             oSpan[i].style.backgroundColor = "#fff";
    //         }
    //         oSpan[index].style.backgroundColor = "#f00";
    //
    //
    //
    //
    //     },2000)
    //
    // }
    //
    // oBox.onmouseover = function () {
    //     clearInterval(timer)
    // }
    // oBox.onmouseout = function () {
    //     setin();
    // }




}

