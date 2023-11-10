$(document).ready(function () {
  $('.slider').slick({
    dots: false,
    arrow: false,
    infinite: true,
    arrow: false,
    speed: 400,
    adaptiveHeight: true,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  $('#loader').css('display', 'none');
});