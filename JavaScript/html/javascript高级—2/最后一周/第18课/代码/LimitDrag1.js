function LimitDrag(id)
{
	Drag.call(this, id);	//继承属性
}

for(var i in Drag.prototype)
{
	LimitDrag.prototype[i]=Drag.prototype[i];
}
