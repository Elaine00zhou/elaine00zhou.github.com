//版权 北京智能社©, 保留所有权利
define(function(require,exports,module){
	var getStyle=require('common.js').getStyle
	
	exports.move=function(obj,json,opational){
		opational=opational||{};
		opational.type=opational.type||'ease-out';
		opational.time=opational.time||300;
		opational.fn=opational.fn||null;
		
		var start={};
		var dis={};
		for(var key in json){
			start[key]=parseFloat(getStyle(obj,key));
			dis[key]=json[key]-start[key];	
		}
		var count=Math.round(opational.time/30);
		var n=0;
		
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			n++;
			
			for(var attr in json){
				switch(opational.type){
					case 'linear':
						var a=n/count;
						var cur=start[attr]+dis[attr]*a;
						break;	
					case 'ease-in':
						var a=n/count;
						var cur=start[attr]+dis[attr]*a*a*a;
						break;	
					case 'ease-out':
						var a=1-n/count;
						var cur=start[attr]+dis[attr]*(1-a*a*a);
						break;	
				}
				
				if(attr=='opacity'){
					obj.style.opacity=cur;
					obj.style.filter='alpha(opacity:'+cur*100+')';
				}else{
					obj.style[attr]=cur+'px';	
				}
			}	
			
			if(n==count){
				clearInterval(obj.timer);
				opational.fn&&opational.fn();	
			}
		},30);
	};	
});