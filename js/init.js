$(document).ready(function(){

/* nav */
$(".list").each(function(){
  $(this).bind({
    "mouseover" : function () {
      $(this).children(".sub_wrap").addClass("open").siblings("a").css({"color":"dodgerblue", "text-decoration":"underline"});
    },
    "mouseleave": function () {
      $(this).children(".sub_wrap").removeClass("open").siblings("a").css({"color":"#666", "text-decoration":"none"});
    }
  })
});

$(".sub").each(function(){
  $(this).bind({
    "mouseover" : function () {
      $(this).children("strong").children("a").css({"color":"dodgerblue", "text-decoration":"underline"});
    },
    "mouseleave": function () {
      $(this).children("strong").children("a").css({"color":"#666", "text-decoration":"none"});
    }
  })
});





/* news */
$(".news_cont > div").each(function() {
  $(this).bind({
    "mouseover" : function () {
      $(this).children("a").stop().animate({bottom: 0}, 200);
    },
    "mouseleave": function () {
      $(this).children("a").stop().animate({bottom: "-189px"}, 200);
    }
  })
});


















});


































