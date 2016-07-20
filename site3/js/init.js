$(document).ready(function(){
	
	// 스크롤 헤더 고정
	$(window).scroll(function(){
		var position = $(window).scrollTop();
		console.log(position);
		
		if(position > 30){
			$("#header").css({"background" : "rgba(255,255,255,0.5)"});
			$(".header_cont").stop().animate({"padding" : "0"});
			$(".header_cont ul").stop().animate({"top" : "13px"});
		}else{
			$("#header").css({"background" : "none"});
			$(".header_cont").stop().animate({"padding" : "60px 0"});
			$(".header_cont ul").stop().animate({"top" : "73px"});
		}
	});
	
	
	
	
	
	
	
	
	
	
	
});




