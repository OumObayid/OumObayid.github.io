//initialisation aos
// AOS.init(); 
// AOS.init({
//   duration: 800,
//   easing: "ease-in-out",
//   once: true
// });

//jquery code
$(document).ready(function () {    
    
    // Init AOS
  function aos_init() {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

     //navbar
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('invisible', $(this).scrollTop() > 40 && $(this).scrollTop()<499);
      $nav.toggleClass('scrolled', $(this).scrollTop() > 500);
    }); 

    // Un défilement animé (« Smooth scroll ») en jQuery sans plugin
    $('a[href^="#"]').click(function () {
        var the_id = $(this).attr("href");
        if (the_id === '#') {
            return;
        }
        $('html, body').animate({
            scrollTop: ($(the_id).offset()).top - 70
        }, 'slow');
        return false;
    });

    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
        } else {
        $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function() {
        $('html, body').animate({
        scrollTop: 0
        }, 1500);
        return false;
    });

 
  // Navigation active state on scroll or on click 
  //change navbar on scroll
    var sections = $('.section')
    , nav = $('.navbar')
    , nav_height = nav.outerHeight()
    ;

    $(window).on('scroll', function () {    
          cur_pos = $(this).scrollTop(); //global
          sections.each(function() {
            var top = $(this).offset().top - nav_height ,
                bottom = top + $(this).outerHeight()  ;
            
            if (cur_pos >= top && cur_pos <= bottom) {
              nav.find('a').removeClass('active');     
              
              $(this).addClass('active');
              nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
            }
          });
          if (cur_pos >= 0 && cur_pos <= window.innerHeight - nav_height) {
            nav.find('a').removeClass('active');
            nav.find('a[href="#header"]').addClass('active');
          }
        });

//change navbar on click
    nav.find('a').on('click', function () {
        var $el = $(this)
        , id = $el.attr('href')
        ,deletHeight=0;
        if(cur_pos <= window.innerHeight && $el.attr('href')=="#apropos" ) deletHeight=80;//80 to change for adaptation
        $('html, body').animate({
        scrollTop: $(id).offset().top - nav_height - deletHeight
        }, 500); 
        return false;
    });
    
    //Skills progress bar animated 
    var offsetTop = $('#skills').offset().top;
    $(window).scroll(function() {
    var height = $(window).height();
    if($(window).scrollTop()+height > offsetTop) {

      jQuery('.bar-container span').each(function(){
        jQuery(this).addClass('progressbar')
      });

    }else{
      jQuery('.bar-container span').each(function(){
        jQuery(this).removeClass('progressbar')
      });
    }
    });
  

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');
      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });
  });
 
  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function() {
    $('.venobox').venobox();
  });
  
 // Testimonials carousel (uses the Owl Carousel library)
 $(".testimonials-carousel").owlCarousel({
  autoplay: true,
  dots: true,
  loop: true,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    900: {
      items: 3
    }
  }
});

// Portfolio details carousel
$(".portfolio-details-carousel").owlCarousel({
  autoplay: true,
  dots: true,
  loop: true,
  items: 1
});





//Jquery fin
});