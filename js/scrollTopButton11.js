
var isVisible = false;
$('#backToTop').click(function(){
    $("html, body").animate({scrollTop:0}, 300);
});

$(window).scroll(function(){
     var shouldBeVisible = $(window).scrollTop()>115;
     if (shouldBeVisible && !isVisible) {
          isVisible = true;
          $('#backToTop').show();
     } else if (isVisible && !shouldBeVisible) {
          isVisible = false;
          $('#backToTop').hide();
    }
});