requirejs.config({
    baseUrl: 'js/lib',
    // paths: {
    //     app: '../app'
    // }
});

requirejs(['jquery', 'move','fillZero','fontColor','rnd','a2d'],
function   ($,move,fillZero,fontColor,rnd,a2d) {
	
    
// -----------------------------------点击换页 tabPage--------------------------------------
	(function()
	{
		var oDiv=document.querySelector('.tabPage');
		var oUl=oDiv.querySelector('ul');
		var aLi=oDiv.querySelectorAll('li');
		var aImg=oDiv.querySelectorAll('img');
		var oBtn=document.querySelector('#tabPage_btn');
		var bReady=true;
		var count=0;
		var aPos=[];
		var aLiH=aLi[0].offsetHeight;
		var aLiW=aLi[0].offsetWidth;
		for(var i = 0; i < aLi.length; i++)
		{
			aPos.push({left:aLi[i].offsetLeft,top:aLi[i].offsetTop})
		}
		for(var i = 0; i < aLi.length; i++)
		{
			aLi[i].style.left=aPos[i].left+'px';
			aLi[i].style.top=aPos[i].top+'px';
			aLi[i].style.margin=0;
			aLi[i].style.position='absolute';
		}
		oBtn.onclick=function()
		{	
			if (!bReady)return;
			bReady=false;
			count++;
			down();
		};
		function down()
		{
			var i=aLi.length-1;
			var timer=setInterval(function(){
				(function(index)
				{
					move(aLi[i],{left:oUl.offsetWidth/2,top:oUl.offsetHeight,
						width:0,height:0},
					{time:700,
						fn:function()
						{
							if (index==0)
							{
								up();
							}
						}
					});
				})(i);
				i--;
				if (i==-1)clearInterval(timer);
			},200)
		}
		function up()
		{
			var i=aLi.length-1;
			var timer=setInterval(function()
			{
				(function(index)
				{
					move(aLi[i],{left:aPos[i].left,top:aPos[i].top,
						height:aLiH,width:aLiW},
					{
						time:700,
						fn:function()
						{
							if (index==0)
							{
								bReady=true;
							}
						}
					})
				})(i)
				i--;
				if (i==-1)clearInterval(timer);
			},200)
			
			if (count==8)count=0;
			for (var j= 0; j < aLi.length; j++)
			{
				var oImg=aLi[j].getElementsByTagName('img')[0];
				oImg.src='images/surround/'+count+'.jpg';
			}
		}
	})()
	

	
});

	