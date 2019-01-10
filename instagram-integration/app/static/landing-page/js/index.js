(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 56)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();

  sr.reveal('.sr-title', {
    delay: 200,
    scale: 0
  });
  sr.reveal('.sr-col-1', {
    delay: 350,
    scale: 0
  });
  sr.reveal('.sr-col-2', {
    delay: 500,
    scale: 0
  });
  sr.reveal('.sr-col-3', {
    delay: 650,
    scale: 0
  });
  sr.reveal('.sr-col-4', {
    delay: 800,
    scale: 0
  });
  sr.reveal('.sr-button', {
    delay: 200,
    distance: '15px',
    origin: 'bottom',
    scale: 0.8,
    afterReveal: function (el) {
      el.classList.add('revealed');
    },
    afterReset: function (el) {
      el.classList.remove('revealed');
    }
  }, 100);
  sr.reveal('.sr-button-2', {
    delay: 400,
    distance: '15px',
    origin: 'bottom',
    scale: 0.8,
    afterReveal: function (el) {
      el.classList.add('revealed');
    },
    afterReset: function (el) {
      el.classList.remove('revealed');
    }
  }, 100);
  sr.reveal('.sr-text-1', {
    delay: 200,
    scale: 0
  });
  sr.reveal('.sr-text-2', {
    delay: 400,
    scale: 0
  });

    // carousel
    // slick
    var slickConf = {
        centerMode: true,
        centerPadding: '20%',
        arrows: true,
        prevArrow: '<div class="btn btn-primary btn-carousel btn-carousel--right"></div>',
        nextArrow: '<div class="btn btn-primary btn-carousel btn-carousel--left flip-it"></div>',
        appendArrows: '#carousel .btn-carousel-box',
        slidesToShow: 2,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              centerPadding: '40px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 720,
            settings: {
                centerMode: false,
              centerPadding: '20px',
              slidesToShow: 1
            }
          }
        ]
      };

    var prevCls = 'slick-slide-prev';
    $('.slider-center')
        .on('init reInit', function(){
            $(".slick-current", $(this)).prev().addClass('slick-slide-prev');
      }).on('beforeChange', function(){
            $(".slick-slide").removeClass(prevCls);
      }).on('afterChange swipe', function(){
          $(".slick-current", $(this)).prev().removeClass(prevCls).addClass(prevCls);
      }).slick(slickConf);
      if ($(window).width() < 720) {
          $('.slider-center').slick('slickGoTo', -1).addClass('slider-center--mobile');
      } else {
          $('.slider-center').removeClass('slider-center--mobile');
      }

    $('.slider-promo').slick({
        prevArrow: '<div class="btn btn-primary btn-carousel btn-carousel--right"></div>',
        nextArrow: '<div class="btn btn-primary btn-carousel btn-carousel--left flip-it"></div>',
        appendArrows: '#difference .btn-carousel-box'
    });

    $('.slider-reviews').slick({
        prevArrow: '<div class="btn btn-primary btn-carousel btn-carousel--right"></div>',
        nextArrow: '<div class="btn btn-primary btn-carousel btn-carousel--left flip-it"></div>',
        appendArrows: '#reviews .btn-carousel-box'
    });

})(jQuery); // End of use strict
