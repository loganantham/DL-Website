$(document).ready(function() {

    $('#home').addClass("active");

    $(window).on("scroll", function() {
        if ($(window).scrollTop() >= 15) {
        $(".navbar").addClass("compressed");
        } else {
        $(".navbar").removeClass("compressed");
        }
    });

    $('ul li a').click(function(){
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
  });
