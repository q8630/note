let headerBox = document.getElementById('header'),
    linkList = document.getElementsByTagName('a'),
    listBox = document.getElementById('list'),
    productList = document.getElementsByTagName('li');

//获取数据
//querry data /bind data

~function(){
  //ajax
    let productDate = null;
        xhr =  new XMLHttpRequest;
    xhr. open('GET','json/a.json',false);
    xhr.send(null);
    xhr.onreadystatechange = function(){
        xhr.readyState === 4 && xhr.status === 200?
        productDate = xhr.responseText : null;
        productDate ? productDate = JSON.parse(productDate):null;
    };
    //xhr.send(null);
   // console.log(typeof productDate);

    let str=``;
    for (let i = 0; i <productDate.length; i++) {

        let {title,price,time,hot,img}=productDate[i];
        str =`<li >
        <a href="javascript:;">
            <img src="${img}" alt="">
            <p>${title}</p>
            <span>￥${price}</span><br/>
            <span>时间：${time}</span><br/>
            <span>热度：${hot}</span><br/>
        </a></li>`;

       // console.log(productDate);
    }
    listBox.innerHTML = str;
}();

~function () {
    let sortList = function(){
    let {index:_index, flag:_flag,} = this,
        productAry = [].slice.call(productList);
    productAry.sort((a,b)=>{
        let ary = ['data-time','data-price','data-hot'];
        let aInn = a.getAttribute(ary[_index]),
            bInn = b.getAttribute(ary[_index]);
        if(_index === 0){
            aInn = aInn.replace(/-/g,'');
            bInn = bInn.replace(/-/g,'');
        }
        return (aInn - bInn) *_flag;
    });
    for (let i = 0; i < productAry.length; i++) {
        let curLi = productAry[i];
        listBox.appendChild(curLi);

    }
    };
    for (let i = 0; i < linkList.length; i++) {
        let curLink = linkList[i];
        curLink.index = i;
        curLink.flag = -1;
        curLink.onclick = function(){
//=>当点击当前的A标签，我们需要让其余的A标签的FLAG回归原视值-1，
    //        这样下一次再点击某一个A标签，还是从-1开始乘，变为1，也就是从升序开始
            for (let j = 0; j < linkList.length; j++) {
                let item = linkList[j];
                if (item !== this){
                    item.flag = -1;
                }

            }
            this .flag *=-1;
            sortList.call(this);
        };

    }
}();




