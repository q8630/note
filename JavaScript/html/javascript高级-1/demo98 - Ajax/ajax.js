
function ajax(url, fnSucc, fnFaild) {
    //1.创建Ajax对象
    if(window.XMLHttpRequest){
        var oAjax=new XMLHttpRequest();
    }else{
        var oAjax=new ActiveXObject("Microsoft.XMLHTTP");   //ie 6
    }



    //2.连接服务器（打开和服务器的连接）
    oAjax.open('GET', url, true);      //post     true:异步    false：同步


    //3.发送
    oAjax.send();

    //4.接收返回
    oAjax.onreadystatechange=function (){
        if(oAjax.readyState==4){        //浏览器和服务器，进行刀哪一步了？
            // 4 代表完成了   但并非成功了
            if(oAjax.status==200){

                //alert('成功了：'+oAjax.responseText);
                fnSucc(oAjax.responseText);
            }else{
                //alert('失败了');
                if(fnFaild){
                    fnFaild();
                }
            }
        }
    };
}