(function(){
  var fade_speed = 1000;
  $(".index_top_pic .element").hide();
  $(".index_top_pic .element:first").addClass("active").show();

  var changeImage = function(){
    var $active = $(".index_top_pic .element.active");
    var $next = $active.next(".element").length?$active.next(".element"):$(".index_top_pic .element:first");

    $active.fadeOut(fade_speed).removeClass("active");
    $next.fadeIn(fade_speed).addClass("active");
  }

  $(".element").click(changeImage);
}());