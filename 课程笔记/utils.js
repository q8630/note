var utils = (function () {
    //listToAry 类数组转换成数组
    function listToAry(arg) {
        var ary = [];
        try {
            ary = [].slice.call(arg, 0);
        } catch (e) {
            for (var i = 0; i < arg.length; i++) {
                ary[ary.length] = arg[i];
            }
        }
        return ary;
    }

    //toJSON  JSON格式的字符串转换成JSON格式对象
    //JSON.parse()  JSON.stringify()
    function toJSON(str) {
        return "JSON" in window ? JSON.parse(str) : eval("(" + str + ")");
    }

    //offset(ele) 求ele到body偏移量
    function offset(ele) {
        var l = ele.offsetLeft;
        var t = ele.offsetTop;
        var p = ele.offsetParent;
        while (p != document.body && p) {//1.ele.offsetParent是body 2.ele是body
            if (navigator.userAgent.indexOf("MSIE 8.0") == -1) {
                l += p.clientLeft;
                t += p.clientTop;
            }
            l += p.offsetLeft;
            t += p.offsetTop;
            p = p.offsetParent
        }
        return {
            l: l,
            t: t
        }
    }

    //getCss(ele,attr) 内嵌式或外链式里的css样式
    /**
     * 获取任意样式
     * @param ele  某个元素
     * @param attr css属性
     */
    function getCss(ele, attr) {
        var res = null;
        if (window.getComputedStyle) {
            res = window.getComputedStyle(ele, null)[attr];
        } else {//ie6~8
            if (attr == "opacity") {
                res = ele.currentStyle.filter;//"alpha(opacity = 50)"
                var reg = /^alpha\(opacity\s*=\s*(\d+(?:\.\d+)?)\)$/;
                res = reg.test(res) ? RegExp.$1 / 100 : 1;
            } else {
                res = ele.currentStyle[attr];
            }
        }
        //字符串里包含是数值|数值+单位 提取出数值部分  "100px"->100 "100"->100  "red"(原值返回)
        reg = /^[+-]?(?:\d|[1-9]\d+)(?:\.\d+)?(?:px|pt|rem|em)?$/;
        return reg.test(res) ? parseFloat(res) : res;
    }

    //setCss(ele,attr,value)  设置css样式
    function setCss(ele, attr, value) {
        //1.opacity 各个浏览器得区别设置
        //2. width|height|margin.....若没加单位，得加个单位
        if (attr == "opacity") {
            ele.style.opacity = value;
            ele.style.filter = "alpha(opacity = " + value * 100 + ")";
            return;
        }
        var reg = /^(width|height|((margin|padding)?(left|top|right|bottom)?))$/i;
        if (reg.test(attr)) {
            if (!isNaN(value)) {//判断是否加单位
                value += "px";
            }
        }
        ele.style[attr] = value;
    }

    /**
     * 批量设置某个元素的CSS样式
     * @param ele
     * @param obj
     */
    function setGroup(ele, obj) {
        //1.先判断obj是否为对象类型
        //2.拿出每个属性和值分别设置
        if (Object.prototype.toString.call(obj) !== "[object Object]") {
            return;
        }
        for (var attr in obj) {//
            //若是私有的属性才操作，若是自己设置的对象原型上公有的，则不去操作
            if (obj.hasOwnProperty(attr)) {
                setCss(ele, attr, obj[attr]);
            }
        }
    }

    //方法一：通过参数的类型，确定css系列方法中的哪个
    /* function css(){
         //用arguments来接收实参
         var ele = arguments[0];
         var argTwo = arguments[1];
         if(typeof argTwo === "string"){
             var argThree = arguments[2];
             if(typeof argThree =="undefined"){
                 return getCss(ele,argTwo);
             }else{
                 setCss(ele,argTwo,argThree);
             }
         }
         if(typeof argTwo === "object"){
             setGroup(ele,argTwo);
         }
     }*/

    //方法二：通过参数的个数判断调用哪个方法
    function css() {
        var arg = arguments;
        var fn = getCss;//默认调用的方法
        arg.length == 3 ? fn = setCss:null;
        arg.length == 2 && typeof arg[1] === "object" ? fn = setGroup : null;
        return fn.apply(null,arg);
    }
    //win(attr,value) 获取文档相关的值 例如一屏的宽高，整个文档的宽度，卷出去的宽高等
    function win(attr,value){
        if(typeof value == "undefined"){
            return document.documentElement[attr]||document.body[attr];
        }else{
            if(attr =="scrollTop"||attr=="scrollLeft"){
                document.documentElement[attr] = value;
                document.body[attr]=value;
            }
        }
    }

    function getOneClass(strClass,context){
        context = context || document;
        var eles = context.getElementsByTagName("*");
        var ary = [];
        var reg = new RegExp("(^| +)"+strClass+"( +|$)");
        for(var i = 0;i<eles.length;i++){
            if(reg.test(eles[i].className)){
                ary.push(eles[i]);
            }
        }
        return ary;
    }

    /**
     * 通过一个或多个类名获取元素
     * @param strClass  一个或多个类名 "  box2 box1"
     * @param context   获取元素的范围
     */
    function getByClass(strClass,context){
         context = context||document;
         if(typeof getElementsByClassName === "function"){
            return  listToAry(context.getElementsByClassName(strClass))
         }
         var eles = context.getElementsByTagName("*");
         var reg = /^\s+|\s+$/g;
         var allClassAry = strClass.replace(reg,"").split(/\s+/g);
         for(var i = 0;i<allClassAry.length;i++){
             var curClass = allClassAry[i];
             var ary = [];
             //查看元素的类名中是否包含curClass这个类名，若包含则放入数组中
             reg = new RegExp("(^| +)"+curClass+"( +|$)");
             for(var j = 0;j<eles.length;j++){
                 var ele = eles[j];
                 if(reg.test(ele.className)){
                     ary.push(ele);
                 }
             }
             eles = ary; //把上次结果保存在eles里，这样下次就能从上次结果中查找具有另一个类名元素
         }
         return ary;
    }
    function hasClass(ele,strClass){
        var allClass = strClass.replace(/^ +| +$/g,"").split(/\s+/g);
        for(var i = 0;i<allClass.length;i++){
            var curClass = allClass[i];
            var reg = new RegExp("(^| +)"+curClass+"( +|$)");
            if(!reg.test(ele.className)){
                return false;
            }
        }
        return true;
    }
    function  addClass(ele,strClass){
        var allClass = strClass.replace(/^ +| +$/g,"").split(/\s+/g);
        for(var i = 0;i<allClass.length;i++){
            var curClass = allClass[i];
            if(!hasClass(ele,curClass)){
                ele.className+=" "+curClass;
            }

        }
    }

    function removeClass(ele,strClass){
        var allClass = strClass.replace(/^ +| +$/g,"").split(/\s+/g);
        for(var i = 0;i<allClass.length;i++){
            var curClass = allClass[i];
            var reg = new RegExp("(^| +)"+curClass+"( +|$)");
            if(hasClass(ele,curClass)){
                ele.className =  ele.className.replace(reg," ");//拿空格替换已有的类名
            }
        }
    }
    function getChildren(ele,tagName){
        var ary = [];
        if(typeof tagName === "string"){
            //从所有子元素中筛选出标记名是tagName的元素
            var childs = ele.childNodes;
            for(var i = 0;i<childs.length;i++){
                if(childs[i].nodeType===1){
                    if(childs[i].nodeName.toLowerCase()===tagName.toLowerCase()){
                        ary[ary.length] = childs[i];
                    }
                }
            }
        }else if(typeof tagName ==="undefined"){
            var childs = ele.childNodes;//所有的子节点
            for(var i = 0;i<childs.length;i++){
                if(childs[i].nodeType === 1){
                    ary.push(childs[i]);
                }
            }
        }else{
            throw new TypeError("第二个参数类型错误");
        }
        return ary;
    }
    return {
        listToAry: listToAry,
        toJSON: toJSON,
        offset: offset,
        css: css,
        win:win,
        getOneClass:getOneClass,
        getByClass:getByClass,
        hasClass:hasClass,
        addClass:addClass,
        removeClass:removeClass,
        getChildren:getChildren
    }

})()