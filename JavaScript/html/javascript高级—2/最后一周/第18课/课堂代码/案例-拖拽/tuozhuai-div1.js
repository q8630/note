
function tuozhuai(id) {
    var _this = this;
    this.oDiv=document.getElementById(id);

    this.oDiv.onmousedown = function (ev) {
        _this.fnDown(ev);
        return false;
    }

};

tuozhuai.prototype.fnDown = function(ev) {
    var _this = this;
    var oEvent = ev||event;

    this.l = oEvent.clientX - this.oDiv.offsetLeft;
    this.t = oEvent.clientY - this.oDiv.offsetTop;

    document.onmousemove = function (ev) {
        _this.fnMove(ev);
    }

    document.onmouseup = function (ev) {
        _this.fnUp(ev);
    }

}
tuozhuai.prototype.fnMove = function(ev) {
    var oEvent = ev||event;
    var x = oEvent.clientX-this.l;
    var y = oEvent.clientY-this.t;
    this.oDiv.style.left = x + "px";
    this.oDiv.style.top = y + "px";
}
tuozhuai.prototype.fnUp = function(ev) {
    document.onmousemove = null;
    document.onmouseup = null;
}
