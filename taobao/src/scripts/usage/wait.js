;(function($){
	var _index=location.search;
		console.log(_index)
	var newIndex=parseInt(_index.split("=")[1]);
		console.log(newIndex)	
	var myScroll = new IScroll(".container", {}),
		mySwiper;
	function init(){
		newSwiper()
		bindEvent()
	}
	function bindEvent(){
		$("#back").on("touchend",goIndex)
		$("#nav").on("touchend","li",swiperTab)
	}
	function newSwiper(){
		mySwiper = new Swiper ('.swiper-container', {
              direction: 'horizontal',
              loop: false,
              initialSlide:newIndex,
              onSlideChangeStart:function(swiper){
				// 滑动之后触发的回调
				idx = swiper.activeIndex;
				var $nav = $("#nav");
				showCurrentAddClass(idx,"nav")
			}
        })
		// mySwiper.slideTo(3)
	}
	function showCurrentAddClass(idx,ele){
		$("#"+ele).children().eq(idx).addClass("border-color").siblings().removeClass("border-color")
	}
	function goIndex(){
		location.href="index.html";
	}
	function swiperTab(){
		mySwiper.slideTo($(this).index())
	}
	init()
	$(document).on("touchmove",function(e){
		e.preventDefault()
	})
})(Zepto);