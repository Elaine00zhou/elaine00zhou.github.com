//版权 北京智能社©, 保留所有权利
/*seajs.use([
			'focusImg.js',
			'tab.js'
		],function(
			modFocus,
			modTab
		){
			modFocus.focusImg('playerIndexFocus');
			modTab.tabAll('movie_moreMsg');		
	});*/
	
	
/*define(function(require,exports,module){
	var modFocus=require('focusImg.js');
	modFocus.focusImg('playerIndexFocus');
	
	var modTab=require('tab.js');
	modTab.tabAll('movie_moreMsg');		
});*/


define(function(require,exports,module){
	require('focusImg.js').focusImg('playerIndexFocus');
	require('tab.js').tabAll('movie_moreMsg');	
		
});




