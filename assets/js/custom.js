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
    responsive: [
      {
        breakpoint: 1750,
        settings: {
          centerPadding:"300px",
        }
      },
      {
        breakpoint: 1500,
        settings: {
          centerPadding:"220px",
        }
      },
      {
        breakpoint: 1350,
        settings: {
          centerPadding:"180px",
        }
      },
      {
        breakpoint: 1199,
        settings: {
          centerPadding:"120px",
        }
      },
      {
        breakpoint: 991,
        settings: {
          centerPadding:"80px",
        }
      },
      {
        breakpoint: 767,
        settings: {
          centerPadding:"50px",
        }
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
          centerPadding:"40px",
        }
      },
    ]
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
    responsive: [
      {
        breakpoint: 1750,
        settings: {
          centerPadding:"300px",
        }
      },
      {
        breakpoint: 1500,
        settings: {
          centerPadding:"220px",
        }
      },
      {
        breakpoint: 1350,
        settings: {
          centerPadding:"180px",
        }
      },
      {
        breakpoint: 1199,
        settings: {
          centerPadding:"120px",
        }
      },
      {
        breakpoint: 991,
        settings: {
          centerPadding:"80px",
        }
      },
      {
        breakpoint: 767,
        settings: {
          centerPadding:"50px",
        }
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
          centerPadding:"40px",
        }
      },
    ]
  });

  $(function(){

    //Scroll event
    $(window).scroll(function(){
      var scrolled = $(window).scrollTop();
      if (scrolled > 200) $('.go-top').fadeIn('slow');
      if (scrolled < 200) $('.go-top').fadeOut('slow');
    });
    
    //Click event
    $('.go-top').click(function () {
      $("html, body").animate({ scrollTop: "0" },  500);
    });
  
  });
  