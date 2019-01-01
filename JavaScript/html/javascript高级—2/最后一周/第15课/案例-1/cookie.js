
//存储
function setCookie(name, value, iDay)
{
	var oDate=new Date();
	oDate.setDate(oDate.getDate()+iDay);

	document.cookie=name+'='+value+';expires='+oDate;
}
//获取
function getCookie(name)
{
	var arr=document.cookie.split('; ');//a=1;b=2;c=3;

	for(var i=0;i<arr.length;i++)
	{
		var arr2=arr[i].split('=');

		if(arr2[0]==name)
		{
			return arr2[1];
		}
	}

	return '';
}
//删除
function removeCookie(name)
{
	setCookie(name, 1, -1);
}