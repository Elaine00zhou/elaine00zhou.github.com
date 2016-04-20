//版权 北京智能社©, 保留所有权利
define(function(require,exports,module){
	
	exports.getStyle=function(obj,attr){
		return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];	
	};
	
	exports.getByClass=function(oParent,sClass){
		if(oParent.getElementsByClassName){
			return oParent.getElementsByClassName(sClass);	
		}else{
			var aEle=oParent.getElementsByTagName('*');
			var result=[];
			for(var i=0;i<aEle.length;i++){
				var arr=aEle[i].className.split(' ');	
				for(var j=0;j<arr.length;j++){
					if(arr[j]==sClass){
						result.push(aEle[i]);
						break;	
					}
				}
			}
			return result;
		}
	};
	
});








