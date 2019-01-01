/**
 * Created by 雨 on 2018/6/29.
 */
var search =document.getElementById("search");
var box = document.getElementById("box");

search.onclick =function(){
    if(box.style.display == 'block'){
        box.style.display = 'none';
    }
    else {
        box.style.display ='block';
    }
};