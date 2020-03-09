$('.speakers__link').on('click', function (evt) {
    evt.preventDefault();
    $('.speakers__popup').fadeIn(300);
});

$(document).on('keydown', function (evt) {
    if (evt.keyCode === 27) {
      $('.speakers__popup').fadeOut(300);
    }
  });

  $('.speakers__popup').on('click', function(evt) {
      if($(evt.target)[0] === $('.speakers__popup')[0]) {
        $('.speakers__popup').fadeOut(300);
      }
  })

  $('.speakers__popup-сlose').on('click', function (evt) {
      $('.speakers__popup').fadeOut(300);
  });