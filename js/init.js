$(document).ready(function(){

$(".news_cont > div").each(function() {
  $(this).bind({
    "mouseover" : function () {
      $(this).children("a").stop().animate({bottom: 0}, 300);
    },
    "mouseleave": function () {
      $(this).children("a").stop().animate({bottom: "-189px"}, 300);
    }
  })
});


















});


































