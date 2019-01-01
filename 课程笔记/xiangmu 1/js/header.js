
    var aHeader =document.getElementById('header');
    var aXnzx =header.getElementsByClassName('nav_piece');
    var aDbox =header.getElementsByClassName('down_box');
    var oLi=header.getElementsByTagName('li');
    //console.log(oLi);

    aXnzx[1].onmouseover=function(){
        aDbox[0].style.display='block'
    };
    aXnzx[1].onmouseout=function(){
        aDbox[0].style.display='none'
    };
    aXnzx[3].onmouseover=function(){
        aDbox[1].style.display='block'

    };
    aXnzx[3].onmouseout=function(){
        aDbox[1].style.display='none'
    };
    aXnzx[4].onmouseover=function(){
        aDbox[2].style.display='block'
    };
    aXnzx[4].onmouseout=function(){
        aDbox[2].style.display='none'
    };





