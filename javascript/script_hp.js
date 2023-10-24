$(document).ready(function () {
    $('.tm-row').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 5000,
      });

      $(window).scroll(function () { 
        if ($(this).scrollTop()) {
          $('#back-top').fadeIn();
        } else {
          $('#back-top').fadeOut();
        }
      });

      $('#back-top').click(function () { 
        $('html, body').animate({
          scrollTop: 0},
          50);
      });

      $('.another-logo').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500,
      });

    
    
});