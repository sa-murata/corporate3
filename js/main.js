'use strict'
$(function(){
  $("#toggle").click(function(){
    $(this).toggleClass("open");
    $("#global-nav").toggleClass("sp-open");
    $("#mask").toggleClass("open");
  });

  let pagetop = $("#pagetop");
  pagetop.hide();
  $(window).scroll(function(){
    if($(this).scrollTop() > 700) {
      pagetop.fadeIn();
      } else {
        pagetop.fadeOut();
      }
    });

  pagetop.on("click",function(){
    $("body,html").animate({
      scrollTop: 0 
    }, 500); 
    return false;
    });
  })
