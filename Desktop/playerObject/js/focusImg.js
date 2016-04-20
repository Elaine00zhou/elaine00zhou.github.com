//版权 北京智能社©, 保留所有权利

define(function(require,exports,module){
	var move=require('move.js').move;
	var getByClass=require('common.js').getByClass;
	exports.focusImg=function(id){
		var focusImgWrap=document.getElementById(id);
		var aHead=focusImgWrap.children[1].getElementsByTagName('li');
		var aContent=focusImgWrap.children[0].getElementsByTagName('li');
		var oActive=getByClass(focusImgWrap,'fi_pointer')[0];
		var zIndex=2;
		
		for(var i=0;i<aHead.length;i++){
			(function(index){
				aHead[i].onclick=function(){
					//oActive.style.left=this.offsetLeft+'px';	
					for(var i=0;i<aContent.length;i++){
						//aContent[i].style.opacity=0;	
						move(aContent[i],{opacity:0});
					}
					move(oActive,{left:this.offsetLeft});
					//aContent[index].style.opacity=1;
					move(aContent[index],{opacity:1});
					aContent[index].style.zIndex=zIndex++;
				};	
			})(i);
		}
	};	
});