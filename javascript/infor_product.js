
$(document).ready(function () {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
      });

    

  });

//===quantity===
    const plus = document.querySelector('.plus-btn'),
          minus = document.querySelector('.minus-btn'),
          amount = document.querySelector('#amount');
    let a = 1;
    plus.addEventListener('click', ()=>{
        a++;
        a = a < 10 ? '0' + a : a;
        console.log(a);
        amount.setAttribute('value', a);
    });
    
    minus.addEventListener('click', ()=>{
      if ( a > 1){
        a--;
        a = a < 10 ? '0' + a : a;
        console.log(a);
        amount.setAttribute('value', a);
      }
    });