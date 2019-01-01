function Drag(id) {
    var _this = this;
    this.oDiv=document.getElementById(id);
    this.oDiv.onmousedown = function (ev) {
        _this.fnDown(ev);
    }

};

Drag.prototype.fnDown = function(ev){
    var _this = this;
    var oEvent=ev||event;
    this.disX=oEvent.clientX-this.oDiv.offsetLeft;
    this.disY=oEvent.clientY-this.oDiv.offsetTop;
    document.onmousemove = function (ev) {
        _this.fnMove(ev);
    }
    document.onmouseup = function (ev) {
        _this.fnUp(ev);
    }
};

Drag.prototype.fnMove = function(ev){
    var oEvent=ev||event;
    this.oDiv.style.left=oEvent.clientX-this.disX+'px';
    this.oDiv.style.top=oEvent.clientY-this.disY+'px';
};

Drag.prototype.fnUp = function(ev){
    document.onmousemove=null;
    document.onmouseup=null;
};