define(function()
{
	function fontColor(n)
	{
		var arr=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
		var str='';
		for(var i = 0; i <n; i++)
		{
			var id=Math.ceil(Math.random()*15);
			str+=arr[id]
		}
		return str;
	}
	return fontColor;
})