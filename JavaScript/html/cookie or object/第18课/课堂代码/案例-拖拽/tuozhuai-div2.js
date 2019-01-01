function tuozhuai2(id) {
    tuozhuai.call(this,id)

}

for(i in tuozhuai.prototype){
    tuozhuai2.prototype[i] = tuozhuai.prototype[i]
}


tuozhuai2.prototype.fnMove=function (ev) {
    var oEvent = ev||event;
    var x = oEvent.clientX-this.l;
    var y = oEvent.clientY-this.t;

    if(x<0){
        x=0
    }

    if(x>document.documentElement.clientWidth-this.oDiv.offsetWidth){
        x=document.documentElement.clientWidth-this.oDiv.offsetWidth
    }

    this.oDiv.style.left = x + "px";
    this.oDiv.style.top = y + "px";
};














