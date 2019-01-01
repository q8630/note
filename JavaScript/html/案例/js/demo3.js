/**
 * Created by 德正 on 2018/1/5.
 */

var oBj = document.getElementById("bj");
var oMyli = document.getElementById("myLI");
var oMySpan = document.getElementById("mySpan");
var aBox = document.getElementsByClassName("box")[0];
var aMyjd = document.getElementsByClassName("myJd")[0];
var aR_box = document.getElementsByClassName("R_box")[0];

var aLI = aR_box.getElementsByTagName("li");


/* 划入北京 */
oBj.onmouseover = function(){
    aBox.style.display = "block";
    oBj.style.backgroundColor = "#fff"
};
/* 画出北京 */
oBj.onmouseout = function(){
    aBox.style.display = "none";
    oBj.style.backgroundColor = "#ccc"
};
oMyli.onmouseover = function(){
    aMyjd.style.display = "block";
    oMyli.style.backgroundColor = "#fff"
    oMySpan.style.background = "url(imgs/down.png)no-repeat center"
    oMySpan.style.backgroundSize = "20px auto"

};
oMyli.onmouseout = function(){
    aMyjd.style.display = "none";
    oMyli.style.backgroundColor = "#ccc";
    oMySpan.style.background = "url(imgs/up.png)no-repeat center";
    oMySpan.style.backgroundSize = "20px auto";
};

for(var i=0; i<aLI.length; i++){
    /* this：  他所在函数属于谁  this就是谁！  */
    aLI[i].onmouseover = function(){
        this.children[1].style.display = "block";
        this.style.backgroundColor = "#c00";
    };
    aLI[i].onmouseout = function(){
        this.children[1].style.display = "none";
        this.style.backgroundColor = "#666";
    };
}


/* 轮播图 */
var aListBox = document.getElementsByClassName("listBox")[0];
var aFeny = aListBox.getElementsByTagName("li");

var aImgBox = document.getElementsByClassName("imgBox")[0];
var aImg = aImgBox.getElementsByTagName("li");

/*
//第一部：
aFeny[0].onmouseover = function(){
    aFeny[0].style.backgroundColor = "#fff";
    aFeny[1].style.backgroundColor = "#fff";
    aFeny[2].style.backgroundColor = "#fff";
    aFeny[3].style.backgroundColor = "#fff";
    aFeny[4].style.backgroundColor = "#fff";
    aFeny[5].style.backgroundColor = "#fff";
    aFeny[6].style.backgroundColor = "#fff";
    aFeny[7].style.backgroundColor = "#fff";
    this.style.backgroundColor = "#f00"
}
aFeny[1].onmouseover = function(){
    aFeny[0].style.backgroundColor = "#fff";
    aFeny[1].style.backgroundColor = "#fff";
    aFeny[2].style.backgroundColor = "#fff";
    aFeny[3].style.backgroundColor = "#fff";
    aFeny[4].style.backgroundColor = "#fff";
    aFeny[5].style.backgroundColor = "#fff";
    aFeny[6].style.backgroundColor = "#fff";
    aFeny[7].style.backgroundColor = "#fff";
    this.style.backgroundColor = "#f00"
}

aFeny[2].onmouseover = function(){
    aFeny[0].style.backgroundColor = "#fff";
    aFeny[1].style.backgroundColor = "#fff";
    aFeny[2].style.backgroundColor = "#fff";
    aFeny[3].style.backgroundColor = "#fff";
    aFeny[4].style.backgroundColor = "#fff";
    aFeny[5].style.backgroundColor = "#fff";
    aFeny[6].style.backgroundColor = "#fff";
    aFeny[7].style.backgroundColor = "#fff";
    this.style.backgroundColor = "#f00"
}

aFeny[3].onmouseover = function(){
    aFeny[0].style.backgroundColor = "#fff";
    aFeny[1].style.backgroundColor = "#fff";
    aFeny[2].style.backgroundColor = "#fff";
    aFeny[3].style.backgroundColor = "#fff";
    aFeny[4].style.backgroundColor = "#fff";
    aFeny[5].style.backgroundColor = "#fff";
    aFeny[6].style.backgroundColor = "#fff";
    aFeny[7].style.backgroundColor = "#fff";
    this.style.backgroundColor = "#f00"
}
aFeny[4].onmouseover = function(){
    aFeny[0].style.backgroundColor = "#fff";
    aFeny[1].style.backgroundColor = "#fff";
    aFeny[2].style.backgroundColor = "#fff";
    aFeny[3].style.backgroundColor = "#fff";
    aFeny[4].style.backgroundColor = "#fff";
    aFeny[5].style.backgroundColor = "#fff";
    aFeny[6].style.backgroundColor = "#fff";
    aFeny[7].style.backgroundColor = "#fff";
    this.style.backgroundColor = "#f00"
}
aFeny[5].onmouseover = function(){
    aFeny[0].style.backgroundColor = "#fff";
    aFeny[1].style.backgroundColor = "#fff";
    aFeny[2].style.backgroundColor = "#fff";
    aFeny[3].style.backgroundColor = "#fff";
    aFeny[4].style.backgroundColor = "#fff";
    aFeny[5].style.backgroundColor = "#fff";
    aFeny[6].style.backgroundColor = "#fff";
    aFeny[7].style.backgroundColor = "#fff";
    this.style.backgroundColor = "#f00"
}
aFeny[6].onmouseover = function(){
    aFeny[0].style.backgroundColor = "#fff";
    aFeny[1].style.backgroundColor = "#fff";
    aFeny[2].style.backgroundColor = "#fff";
    aFeny[3].style.backgroundColor = "#fff";
    aFeny[4].style.backgroundColor = "#fff";
    aFeny[5].style.backgroundColor = "#fff";
    aFeny[6].style.backgroundColor = "#fff";
    aFeny[7].style.backgroundColor = "#fff";
    this.style.backgroundColor = "#f00"
}
aFeny[7].onmouseover = function(){
    aFeny[0].style.backgroundColor = "#fff";
    aFeny[1].style.backgroundColor = "#fff";
    aFeny[2].style.backgroundColor = "#fff";
    aFeny[3].style.backgroundColor = "#fff";
    aFeny[4].style.backgroundColor = "#fff";
    aFeny[5].style.backgroundColor = "#fff";
    aFeny[6].style.backgroundColor = "#fff";
    aFeny[7].style.backgroundColor = "#fff";
    this.style.backgroundColor = "#f00"
}
*/

/*
//第二步：
aFeny[0].onmouseover = function(){
    for(var i=0;i<aFeny.length; i++){
        aFeny[i].style.backgroundColor = "#fff";
    }
    this.style.backgroundColor = "#f00"
}
aFeny[1].onmouseover = function(){
    for(var i=0;i<aFeny.length; i++){
        aFeny[i].style.backgroundColor = "#fff";
    }
    this.style.backgroundColor = "#f00"
}
aFeny[2].onmouseover = function(){
    for(var i=0;i<aFeny.length; i++){
        aFeny[i].style.backgroundColor = "#fff";
    }
    this.style.backgroundColor = "#f00"
}
aFeny[3].onmouseover = function(){
    for(var i=0;i<aFeny.length; i++){
        aFeny[i].style.backgroundColor = "#fff";
    }
    this.style.backgroundColor = "#f00"
}
aFeny[4].onmouseover = function(){
    for(var i=0;i<aFeny.length; i++){
        aFeny[i].style.backgroundColor = "#fff";
    }
    this.style.backgroundColor = "#f00"
}
aFeny[5].onmouseover = function(){
    for(var i=0;i<aFeny.length; i++){
        aFeny[i].style.backgroundColor = "#fff";
    }
    this.style.backgroundColor = "#f00"
}
aFeny[6].onmouseover = function(){
    for(var i=0;i<aFeny.length; i++){
        aFeny[i].style.backgroundColor = "#fff";
    }
    this.style.backgroundColor = "#f00"
}
aFeny[7].onmouseover = function(){
    for(var i=0;i<aFeny.length; i++){
        aFeny[i].style.backgroundColor = "#fff";
    }
    this.style.backgroundColor = "#f00"
}

*/

/*
//第三步：
for(var i=0;i<aFeny.length;i++){
    aFeny[i].onmouseover = function(){
        for(var i=0;i<aFeny.length; i++){
            aFeny[i].style.backgroundColor = "#fff";
        }
        this.style.backgroundColor = "#f00"
    }
}*/

//第四步：
//aImg[0].style.display = "block";     /* 默认第一张图片显示 */
//aFeny[0].style.backgroundColor = "#f00";   /* 默认第一个点变红 */
//for(var i=0;i<aFeny.length;i++){
//    aFeny[i].setAttribute("number",i)   /* 给小圆点添加一个number属性 并赋值为0-7 */
//    aFeny[i].onmouseover = function(){
//        var num = this.getAttribute("number"); /* 取出 给小圆点添加的number属性 */
//        for(var i=0;i<aFeny.length; i++){
//            aFeny[i].style.backgroundColor = "#fff";/* 让所有圆点变成白色 */
//            aImg[i].style.display = "none";     /* 让所有图片消失 */
//        }
//        this.style.backgroundColor = "#f00";
//        aImg[num].style.display = "block";      /* 把小圆点的number属性值 取出来给 aImg[？] 当索引值*/
//    }
//}

//另一种方法
aImg[0].style.display = "block";     /* 默认第一张图片显示 */
aFeny[0].style.backgroundColor = "#f00";   /* 默认第一个点变红 */
for(var i=0;i<aFeny.length;i++){
    aFeny[i].number = i;   /* 添加一个 number 属性 */
    aFeny[i].onmouseover = function(){
        for(var i=0;i<aFeny.length; i++){
            aFeny[i].style.backgroundColor = "#fff";/* 让所有圆点变成白色 */
            aImg[i].style.display = "none";     /* 让所有图片消失 */
        }
        this.style.backgroundColor = "#f00";
        aImg[this.number].style.display = "block";      /* 把小圆点的number属性值 取出来给 aImg[？] 当索引值*/
    }
}


























