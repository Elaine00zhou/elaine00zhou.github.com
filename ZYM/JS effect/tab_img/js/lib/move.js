define(function (){
	function getStyle(obj,attr)
{
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr]
}
function move(obj,json,opational)
{
	var opational=opational||{};
	opational.time=opational.time||700;
	opational.type=opational.type||'ease-out';
	var start={};
	var dis={};
	for (var key in json)
	{
		start[key]=parseInt(getStyle(obj,key));
		dis[key]=json[key]-start[key];
	}
	var n=0;
	var count=Math.round(opational.time/30);
	clearInterval(obj.timer);
	obj.timer=setInterval(function()
	{
		n++;
		for (var key in json)
		{
			switch (opational.type)
			{
				case 'linear':
					var a=n/count;
					var cur=start[key]+dis[key]*a;
					break;
				case 'ease-in':
					var a=n/count;
					var cur=start[key]+dis[key]*a*a*a;
					break;
				case 'ease-out':
					var a=1-n/count;
					var cur=start[key]+dis[key]*(1-a*a*a);
			}
			if (key=='opacity')
			{
				obj.style.opacity=cur;
				obj.style.filter='alpha(opacity:'+cur*100+')';
			}
			else
			{
				obj.style[key]=cur+'px';
			}
		}
		if (n==count)
		{
			clearInterval(obj.timer);
			opational.fn&&opational.fn();
		}
	},30)		
}

	return move;
});

