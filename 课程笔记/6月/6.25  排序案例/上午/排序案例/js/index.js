let headerBox = document.getElementById('header'),
    headrList = document.getElementsByTagName('a'),
    listBox = document.getElementById('list'),
    productList = document.getElementsByTagName('li');




//获取 绑定数据
// ~function () {
//    //AJAX 创建ajax实例
//     发送请求
//     let productD
//}
~function(){
    //=>AJAX
    let productData = null,
        xhr = new XMLHttpRequest();
    xhr.open('GET','json/product.json',false);
    xhr.onreadystatechange = () =>{
        xhr.readyState===4&&xhr.status===200?productData=xhr.responseText:null;
        //FOMAT DATA
        productData?productData=JSON.parse(productData):null;
    };
    xhr.send(null);

    //=>BIND DATA
    //建立一个空模板字符串
    let str=``;
    for (let i = 0; i < productData.length; i++) {
        let{
            title,
            img,
            price,
            time,
            hot,
            }=productData[i];

        str+=`<li data-time=${time} data-price=${price} data-hot=${hot}>
        <a href="javascript:;">
            <img src="${img}" alt="">
            <p>${title}</p>
            <span>￥${price}</span><br/>
            <span>时间：${time}</span><br/>
            <span>热度：${hot}</span>
        </a></li>`
    }
    listBox.innerHTML=str;
}();



