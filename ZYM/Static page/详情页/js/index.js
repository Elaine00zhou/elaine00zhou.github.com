// JavaScript Document
window.onload=function btn(){
	var oimg=document.getElementById('wk-img');
	var obtn=document.getElementById('wk-btn')
	
	obtn.onclick=function(){
		oimg.style.display='none'
		obtn.style.display='none'	
		}

	var tg=document.getElementById('tg')
	var wk=document.getElementById('wk-toppos')
	
	tg.onmouseover=function(){
		wk.style.display='block'
		}
	tg.onmouseout=function(){
		wk.style.display='none'
		}	
	}