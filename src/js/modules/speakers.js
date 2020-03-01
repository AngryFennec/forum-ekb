'use strict';

(function() {
// var pricesSwiper;
    let  speakersSwiper = new Swiper('.speakers__container', {
        initialSlide: 1,
        slidesPerView: '3',
        spaceBetween: -150,
        centeredSlides: true,
        speed: 1000,
        navigation: {
        nextEl: '.speakers__next',
        prevEl: '.speakers__prev',
        },
        pagination: {
            el: '.speakers__bullets'
          },
        paginationClickable: true,
          breakpoints: {
             1024: {
                slidesPerView: '3',
                spaceBetween: -150,
              }, 
              768: {
                slidesPerView: '2',
                spaceBetween: 30,
              },
              600: {
                slidesPerView: '1',
                spaceBetween: 50,
              }
          }
    });


})();