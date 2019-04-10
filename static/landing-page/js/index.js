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
      $('.video-bg').addClass('video-bg--fadeInUp');
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

  sr.reveal('.sr-container', {
    origin: 'bottom',
    distance: '100px',
    duration: 1000,
    delay: 0,
  });
  sr.reveal('.sr-container-1', {
    origin: 'bottom',
    distance: '100px',
    duration: 1000,
    delay: 750,
  });
  sr.reveal('.sr-title', {
    origin: 'bottom',
    distance: '60px',
    delay: 200,
    scale: 1
  });
  sr.reveal('.sr-col-1', {
    delay: 500,
    origin: 'bottom',
    distance: '60px',
    scale: 1
  });
  sr.reveal('.sr-col-2', {
    delay: 650,
    origin: 'bottom',
    distance: '60px',
    scale: 0.5
  });
  sr.reveal('.sr-col-3', {
    delay: 800,
    origin: 'bottom',
    distance: '60px',
    scale: 0.5
  });
  sr.reveal('.sr-col-4', {
    delay: 950,
    scale: 0.5
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
    sr.reveal('.sr-text-0', {
        delay: 50,
        origin: 'bottom',
        scale: 0.5
    });
  sr.reveal('.sr-text-1', {
    delay: 200,
    scale: 0
  });
  sr.reveal('.sr-text-2', {
    delay: 400,
    scale: 0
  });
    sr.reveal('.sr-text-3', {
        delay: 900,
        origin: 'bottom',
        scale: 0.5
    });

    // carousel
    // slick
    var slickConf = {
        centerMode: true,
        centerPadding: '20%',
        arrows: true,
        prevArrow: '<div class="btn btn-primary btn-carousel btn-carousel--right mr-1"></div>',
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
            breakpoint: 768,
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
      if ($(window).width() < 768) {
          $('.slider-center').slick('slickGoTo', -1).addClass('slider-center--mobile');
      } else {
          $('.slider-center').removeClass('slider-center--mobile');
      }

    $('.slider-promo').slick({
        prevArrow: '<div class="btn btn-primary btn-carousel btn-carousel--right mr-1"></div>',
        nextArrow: '<div class="btn btn-primary btn-carousel btn-carousel--left flip-it"></div>',
        appendArrows: '#difference .btn-carousel-box'
    });

    $('.slider-reviews').slick({
        prevArrow: '<div class="btn btn-primary btn-carousel btn-carousel--right mr-1"></div>',
        nextArrow: '<div class="btn btn-primary btn-carousel btn-carousel--left flip-it"></div>',
        appendArrows: '#reviews .btn-carousel-box'
    });

    /**/
    var initialMouse = 0;
    var slideMovementTotal = 0;
    var mouseIsDown = false;
    var slider = $('#slider');
    // var sliderSignIn = $('#signIn');
    // var mouseIsDownSignIn = false;

    function sliderHandlerMouseDown(event, /*isSignIn*/) {
        // if (isSignIn) {
        //     mouseIsDown = mouseIsDownSignIn;
        // }
        mouseIsDown = true;
        slideMovementTotal = $('#button-background').width() - $(this).width();
        initialMouse = event.clientX || event.originalEvent.touches[0].pageX;
        // console.log(initialMouse);
    }
    function sliderHandlerMouseUp(event, /*isSignIn*/) {
        // if (isSignIn) {
        //     mouseIsDown = mouseIsDownSignIn;
        // }
        if (!mouseIsDown) {
            return;
        }
        mouseIsDown = false;
        var currentMouse = event.clientX || event.changedTouches[0].pageX;
        var relativeMouse = currentMouse - initialMouse;
        var url = slider.data('href');

        // console.log(relativeMouse, slideMovementTotal);
        if (relativeMouse < slideMovementTotal - 20) {
            $('.slide-text').fadeTo(300, 1);
            slider.animate({
                left: '10px'
            }, 300).css({'cursor': 'pointer'});
            return;
        }
        window.location.href = url;
        // console.log(url);
    }
    function sliderHandlerMouseMove(event, /*isSignIn*/) {
        // if (isSignIn) {
        //     mouseIsDown = mouseIsDownSignIn;
        // }


        if (!mouseIsDown) {
            // console.log('return');
            return;
        }
        // console.log(!mouseIsDown);

        var currentMouse = event.clientX || event.originalEvent.touches[0].pageX;
        var relativeMouse = currentMouse - initialMouse;
        var slidePercent = 1 - (relativeMouse / slideMovementTotal);

        $('.slide-text').fadeTo(0, slidePercent);

        if (relativeMouse <= 0) {
            slider.css({'left': '10px', 'cursor': 'grabbing'});
            return;
        }
        if (relativeMouse >= slideMovementTotal - 0) {
            slider.css({'left': slideMovementTotal + 'px'});
            return;
        }
        slider.css({'left': relativeMouse - 0,  'cursor': 'grabbing'});
        // console.log(relativeMouse);
    }

    // sliderSignIn.on('mousedown touchstart', sliderHandlerMouseDown.bind(this, 1));
    slider.on('mousedown touchstart', sliderHandlerMouseDown);

    $(document.body, '#slider').on('mouseup touchend', sliderHandlerMouseUp);
    // $(document.body, '#sliderSignIn').on('mouseup touchend', sliderHandlerMouseUp.bind(this, 1));

    $(document.body).on('mousemove touchmove', sliderHandlerMouseMove);
    // $(document.body).on('mousemove touchmove', sliderHandlerMouseMove.bind(this, 1));

    /* */
    function signInHandler(e) {
        setTimeout(function () {
            var url = $(e.target).closest('.nav-item__sign-in').find('.switch').data('href');
            window.location.href = url;
        }, 500);
    }
    $('.switch input[type="checkbox"]').prop('checked', false);
    $('.nav-item__sign-in').on('click', signInHandler)

})(jQuery); // End of use strict
