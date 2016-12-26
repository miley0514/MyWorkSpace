;(function($){
	function init(){
		bindEvent()
	}
	function bindEvent(){
		$("#exit").on("touchend",function(){
			location.href="login.html";
		})
		 $("#gowait").on("touchend","li",function(){
			var ind=$(this).index()+1;
			location.href="wait.html?index="+ind;
		})
		$("#allorder").on("touchend",function(){
			location.href="wait.html?index=0";
		})
	}
	init()
})(Zepto);