function jsonp(url,data,callback) {


    // 1 生成script标签
    osc = document.createElement("script");
    fname = "f"+parseInt(Math.random()*1000000);
    //在window对象上定义名字随机的函数
    //2 拼接url
    url = url+"?"+data+"&callback="+fname;
    osc.src=url;
    //3   将生成的script插入到head中   执行跨域请求
    document.head.appendChild(osc);
    window[fname] = function (text) {
        if(callback){
            callback(text)
        }
        document.head.removeChild(osc);
    };
}