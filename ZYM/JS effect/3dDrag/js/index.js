requirejs.config({
    baseUrl: 'js/lib',
    // paths: {
    //     app: '../app'
    // }
});

requirejs(['jquery', 'move','fillZero','fontColor','rnd','a2d'],
function   ($,move,fillZero,fontColor,rnd,a2d) {
	
    
// -----------------------------------img surRound--------------------------------------
	function surRound()
	{	
		var len=$('.surRound ul li').length;
		var num = 4;
		$('.surRound ul li').each(function()
		{	
			$(this).css('transition',"1s all ease " + (len-$(this).index())*200 +"ms");
			if ($(window).width()<780) 
			{
				num = 2.8;
			}
			$(this).css("transform","rotateY("+360/len*$(this).index()+"deg) translateZ("+num+"rem)");
		})
	}
	var surRoundR=true;
	$('.surRound_btn').on('click',function()
	{	
		if (surRoundR)
		{	
			this.value='点我收起';
			surRound();
			surRoundR=false;
		}
		else
		{	
			this.value='与你分享';
			$('.surRound ul li').each(function()
			{	
				$(this).css('transition',"1s all ease " + $(this).index()*200 +"ms");
				$(this).css('transform',"rotateY(0deg) translateZ(0rem)");
				$('.surRound ul').css('transform',"perspective(800px) rotateX(-15deg) rotateY(0deg)");
			})
			surRoundR=true;
		}
	})
	function surRoundDrag()
	{
		var x=150;
		var y=0;
		var speedX = 0;
		var speedY = 0;
		var lastX = 0;
		var lastY = 0;
		var surRound_timer = null;
		var count = 0;
		$('.surRound ul').on('mousedown',function(ev)
		{
			clearInterval(surRound_timer);
			var disX=ev.pageX-y;
			var disY=ev.pageY-x;
			document.onmousemove=function(ev)
			{
				y=ev.pageX-disX;
				x=ev.pageY-disY;
				if(x > 600)
				{
					x = 600;
				} 
				else if(x < -600)
				{
					x = -600;	
				}
				speedX=x-lastX;
				speedY=y-lastY;

				lastX=x;
				lastY=y;
				$('.surRound ul').css('transform',"perspective(800px) rotateX("+-x/10+"deg) rotateY("+y/10+"deg)");
			};
			document.onmouseup=function(ev)
			{	
				document.onmousemove=document.onmouseup=null;
				clearInterval(surRound_timer);
				surRound_timer=setInterval(function()
				{
					x+=speedX;
					y+=speedY;
					speedX*=0.95;
					speedY*=0.95;
					
					if(Math.abs(speedX) < 1)
					{
						speedX = 0;
					}
					if(Math.abs(speedY) < 1)
					{
						speedY = 0;
					}
					if(speedX == 0&& speedY == 0)
					{
						clearInterval(surRound_timer);
					}
					$('.surRound ul').css('transform','perspective(800px) rotateX('+-x/10+'deg) rotateY('+y/10+'deg)')
				},30)
			};
			return false;
		})
	}surRoundDrag();
});

	