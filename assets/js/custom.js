$('.strategy-slider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    autoplay: true,
    centerMode:true,
    centerPadding:"400px",
    autoplaySpeed: 3300,
    speed: 1200,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow:"<img src='./assets/img/left-arrow.png' class='img-fluid slick-left' loading='lazy' />",
    nextArrow:"<img src='./assets/img/right-arrow.png' class='img-fluid slick-right' loading='lazy' />",
  });
  $('.testimonial-slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    centerMode:true,
    centerPadding:"400px",
    autoplaySpeed: 3300,
    speed: 1200,
    slidesToShow: 2,
    slidesToScroll: 1,
  });

