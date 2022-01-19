/* global $, JQuery, alert*/

$(document).ready(function () {
   $('.carousel').carousel({
      interval:5000
   });
    // show color option div when click on the gear

    $(".gear-check").click(function () {
        $(".color-option").fadeToggle();
    });

    // change theme color on click

      var colorLi =$(".color-option ul li");
      colorLi
        .eq(0).css("backgroundColor","#13fd06").end()
        .eq(1).css("backgroundColor","#f70ac7").end()
        .eq(2).css("backgroundColor","#f70408").end()
        .eq(3).css("backgroundColor","#fbfb07").end()
        .eq(4).css("backgroundColor","#9f91e8");

      colorLi.click(function () {
         $("link[href*='theme']").attr("href",$(this).attr("data-value"));
      });


// loading screen

// loading screen

// caching the scroll top element

var scrollButton = $("#scroll-top");
$(window).scroll(function () {
   $(this).scrollTop()>=700? scrollButton.show(): scrollButton.hide();
});
//click on Button to scroll top

scrollButton.click(function () {
    $("html,body").animate({scrollTop : 0},600);
});
});
