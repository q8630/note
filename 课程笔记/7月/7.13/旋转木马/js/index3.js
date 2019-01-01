window.onload = function () {
    //需求：制作旋转轮播图。
    //原理：每一张图片都指定一套样式。当我们点击左右小三角的时候，只要控制数组删除和添加元素就可以了。
    //点击右侧三角，删除第一个数组元素，添加进最末尾。
    //点击左侧三角，删除最后一个数组元素，添加进第一位。

    //步骤：
    //1.鼠标进入显示移开隐藏。透明度做。
    //2.使用animate方法，给所有的li指定样式。（所有盒子都是缓动过去的，有滑动的效果）
    //3.左右两侧的小三角，点击以后，绑定事件
    //4.点击右侧三角，删除第一个数组元素，添加进最末尾。
        // 操作完数组后，按照数组样式，使用animate方法，给所有的li指定样式。
        //这样的话，所有的li就从原来的位置，滑动到指定的位置了。

    var arr = [
        {   //  1
            width:400,
            top:70,
            left:50,
            opacity:0.2,
            "z-index":2
        },
        {  // 2
            width:600,
            top:120,
            left:0,
            opacity:0.8,
            "z-index":3
        },
        {   // 3
            width:800,
            top:100,
            left:200,
            opacity:1,
            "z-index":4
        },
        {  // 4
            width:600,
            top:120,
            left:600,
            opacity:0.8,
            "z-index":3
        },
        {   //5
            width:400,
            top:70,
            left:750,
            opacity:0.2,
            "z-index":2
        }
    ];

    //1.鼠标进入显示移开隐藏。透明度做。
    var slide = document.getElementById("slide");
    var liArr = slide.children[0].children;
    var arrow = slide.children[1];
    var prev = arrow.children[0];
    var next = arrow.children[1];
    //开闭原则
    var flag = true;


    //鼠标进入透明度为1；通过控制slide和arrow
    slide.onmouseover = function () {
        animate(arrow,{"opacity":1});
    }
    slide.onmouseout = function () {
        animate(arrow,{"opacity":0});
    }

    //页面初始化
    autoPlay();

    //3.左右两侧的小三角，点击以后，绑定事件
    next.onclick = function () {
        if(flag){
            //点击之后，控制器立刻进制点击。
            //把开关闭合。animate方法执行完毕之后打开。
            flag = false;
            //如果等于true,那么就调用arr.push(arr.shift());
            autoPlay(true);
        }
    }


    //3.左侧同理
    prev.onclick = function () {
        //4.点击右侧三角，删除第一个数组元素，添加进最末尾。
        //如果等于false,那么就调用arr.unshift(arr.pop());
        autoPlay(false);
    }



    function autoPlay(bool){
        //调用autoPlay什么也没有传，那么不需要操作数组。
        if(bool !== undefined){
            //判断
            if(bool){
                arr.push(arr.shift());
            }else{
                arr.unshift(arr.pop());
            }
        }

        // 操作完数组后，按照数组样式，使用animate方法，给所有的li指定样式。
        for(var i=0;i<liArr.length;i++){
            animate(liArr[i],arr[i], function () {
                flag = true;
            });
        }
    }


}