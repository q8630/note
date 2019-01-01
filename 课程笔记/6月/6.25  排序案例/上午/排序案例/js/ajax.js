let productData = null;

//创建AJAX 实例
let xhr = new XMLHttpRequest();

//  get/post open(数据请求方式，接口，同步/异步)
// =>打开一个请求的地址
//（一般地址都是服务器提供好的，会给我们一个API接口文档），
//最后一个参数是设置同步还是异步（FALSE:同步 TRUE:异步）。
//真实项目中最常使用是是异步，今天我们使用同步
xhr. open('GET','json/a.json',false);

//服务器作出响应
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200){
        productData = xhr.responseText;
    }
};

//发送数据
xhr.send(null);
console.log(productData);

