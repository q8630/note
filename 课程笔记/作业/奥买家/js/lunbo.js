/**
 * Created by 雨 on 2018/7/10.
 */
var arrImg = document.querySelectorAll('.adv_box imgs');
var arrLi= document.querySelectorAll('.adv_box a');
for (var i = 0; i < arrLi.length; i++) {
    arrLi[i].index = i;
    arrLi[i].onmouseover = function(){
        for (var j = 0; j < arrImg.length; j++) {
            arrImg[j].style.display = 'none';
            arrLi[j].classList.remove('now');
        }
        arrImg[this.index].style.display = 'block';
        this.classList.add('now');
    }
}


