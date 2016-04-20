// JavaScript Document
$(function()
{
	var aTime=$('#time .time')
	function date()
	{
		var d=new Date();
		var hours=fillZero(d.getHours());
		var minutes=fillZero(d.getMinutes());
		var seconds=fillZero(d.getSeconds());
		s=hours+minutes+seconds;
		for(var i = 0; i< aTime.length;  i++)
		{
			aTime[i].src='Img/time_Images/'+s.charAt(i)+'.png'

		}
	}
	date();
	setInterval(date,1000)
	
	var oAudio=$('.audio')[0];
	if(navigator.userAgent.indexOf("MSIE")!=-1)
	{
		oAudio.controls = false;
	}

	function fillZero(n){return n<10?'0'+n:''+n;}
	function rnd(n,m){return n+Math.random()*(m-n);}


	//导航
	$('#ul1 li a').on('click',function()
	{
		$('#ul1 li a').removeClass('active');
		$(this).addClass('active');
	})
	//banner
	var n=0;
	function tab_img()
	{
		$('#header .banner img').stop().animate({opacity:0},{complete:function()
		{	
			n++;
			$("#header .banner .ban_c").stop().animate({opacity:0},{duration:2000});
			$('#header .banner img').attr('src',"Img/banner"+n%3+".png");
			$('#header .banner img').stop().animate({opacity:1},{complete:function()
			{
				$("#header .banner .ban_c").stop().animate({opacity:1},{duration:2000});
				tab_img();
			},duration:8000})
		},duration:8000})
	}tab_img();

//showbox
	$(".showbox li").hover(function()
	{	
		$(this).find("p").removeClass('off');
		$(this).find("p").addClass('on');
		$(this).find('img').addClass('on');
	},function()
	{	
		$(this).find('img').removeClass('on');
		$(this).find("p").removeClass('on');
		$(this).find("p").addClass('off');
	});

});


