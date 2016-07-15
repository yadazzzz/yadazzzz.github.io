$(document).ready(function(){
	
	// 스크롤 헤더 고정
	$(window).scroll(function(){
		var position = $(window).scrollTop();
		//console.log(position);
		
		if(position >= 30){
			$("#header").css({"position" : "fixed", "top" : "0", "background" : "rgba(255,255,255,0.5)", "z-index" : "100"});
			$(".header_cont").css({"padding" : "0"});
			$(".header_cont ul").css({"top" : "13px"});
			$("#contents").css({"margin-top" : "102px"});
		}else{
			$("#header").css({"position" : "normal", "background" : "none"});
			$(".header_cont").css({"padding" : "30px 0"});
			$(".header_cont ul").css({"top" : "43px"});
			$("#contents").css({"margin-top" : "0"});
		}
		
	});
	
	// ==> Q. 위에 CSS 코드가 덕지덕지 되어있다. 이 코드를 간단하게 할 수 있는 방법은 없을까?
	
	
	
	
	
	
	
	
	
	
});




