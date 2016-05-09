fit = (function(){

	var getURLParameter = function(name){
		return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
	}

	var realWidth = Number(getURLParameter('width'));
	var devicePixelRatio = devicePixelRatio;
	var screenWidth = realWidth ? realWidth : screen.width;

	var isScale = !$.os.android;

	var viewport = function(stdWidth){
		var stdWidth = stdWidth || 360;
		var dpi = stdWidth / screenWidth * devicePixelRatio * 160, scale = screenWidth / stdWidth;
		var meta = isScale ? '<meta name="viewport" content="width='+stdWidth+', initial-scale='+scale+', maximum-scale='+scale+', minimum-scale='+scale+', user-scalable=no">' : '<meta name="viewport" content="width='+stdWidth+', target-densitydpi='+dpi+', user-scalable=no">';
		document.write(meta);
		return meta;
	}

	return viewport;

})();