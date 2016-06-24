$(document).ready(function(){

/* skip */
$(".skip a")
  .focus(function(){
    $(".skip").css({"top":"0"});
  })
  .blur(function(){
    $(".skip").css({"top":"-9999px"});
  });


/* header */
// 모바일 화면일 때
if(matchMedia("screen and (max-width:666px)").matches){
  $(".h_menu a:nth-of-type(1)").html("<img src='images/search.png' alt='검색 아이콘'>");
  $(".h_menu a:nth-of-type(2)").html("<img src='images/star.png' alt='별 아이콘'>");
  $(".h_menu a:nth-of-type(3)").html("<img src='images/lock.png' alt='자물쇠 아이콘'>");

  $(".mobile_menu_icon").css("display", "block");

}else{
  $(".h_menu a:nth-of-type(1)").html("Product Search");
  $(".h_menu a:nth-of-type(2)").html("Sustainability");
  $(".h_menu a:nth-of-type(3)").html("Careers");

  $(".mobile_menu_icon").css("display", "none");
}

$(window).resize(function(){
  if(matchMedia("screen and (max-width:666px)").matches){
    $(".h_menu a:nth-of-type(1)").html("<img src='images/search.png' alt='검색 아이콘'>");
    $(".h_menu a:nth-of-type(2)").html("<img src='images/star.png' alt='별 아이콘'>");
    $(".h_menu a:nth-of-type(3)").html("<img src='images/lock.png' alt='자물쇠 아이콘'>");

    $(".mobile_menu_icon").css("display", "block");

  }else{
    $(".h_menu a:nth-of-type(1)").html("Product Search");
    $(".h_menu a:nth-of-type(2)").html("Sustainability");
    $(".h_menu a:nth-of-type(3)").html("Careers");

    $(".mobile_menu_icon").css("display", "none");
  }
});


$(".mobile_menu_icon").on("click", function(){
  $("#mobileNav").toggleClass("navActive");

  if($("#mobileNav").hasClass("navActive")){
    $("#mobileNav").animate({"left":"0px"}, 250);
    $("body").css("overflow-y", "hidden");
  }else{
    $("#mobileNav").animate({"left":"-270px"}, 250);
  }
});







/* nav */
$(".list").each(function(){
  $(".sub_wrap").removeClass("open");

  $(this).bind({
    "mouseover" : function () {
      $(".sub_wrap").removeClass("open");
      $(this).children(".sub_wrap").addClass("open").siblings("a").css({"color":"dodgerblue", "text-decoration":"underline"});
    },
    "mouseleave": function () {
      $(".sub_wrap").removeClass("open");
      $(this).children(".sub_wrap").removeClass("open").siblings("a").css({"color":"#666", "text-decoration":"none"});
    }
  });

  $(this).children("a").focus(function(){
    $(".sub_wrap").removeClass("open");
    $(this).siblings(".sub_wrap").addClass("open").siblings("a").css({"color":"dodgerblue", "text-decoration":"underline"});
  });

  $(this).children("a").blur(function(){
    $(this).children(".sub_wrap").removeClass("open").siblings("a").css({"color":"#666", "text-decoration":"none"});
  });

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

if(matchMedia("screen and (max-width:666px)").matches){

}else{
  $(".news_cont > div").each(function() {
    $(this).bind({
      "mouseover" : function () {
        $(this).children("a").stop().animate({bottom: 0}, 200);
      },
      "mouseleave": function () {
        $(this).children("a").stop().animate({bottom: "-300px"}, 200);
      }
    })
  });
}

$(window).resize(function(){
  if(matchMedia("screen and (max-width:666px)").matches){

  }else{
    $(".news_cont > div").each(function() {
      $(this).bind({
        "mouseover" : function () {
          $(this).children("a").stop().animate({bottom: 0}, 200);
        },
        "mouseleave": function () {
          $(this).children("a").stop().animate({bottom: "-300px"}, 200);
        }
      })
    });
  }
});


















});


































