//initialisation aos
AOS.init(); 

$(document).ready(function () {  
    //mettre la page au top lors de son rechargement
    $('html, body').animate({ 
        scrollTop: '0px' 
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

 // Navigation active state on scroll
 var sections = $('section');
 var navbar = $('.navbar');

 $(window).on('scroll', function() {
   var cur_pos = $(this).scrollTop() + 200;

   sections.each(function() {
     var top = $(this).offset().top,
       bottom = top + $(this).outerHeight();

     if (cur_pos >= top && cur_pos <= bottom) {
       if (cur_pos <= bottom) {
        navbar.find('li').removeClass('active');
       }
       navbar.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
     }
     if (cur_pos < 300) {
       $(".navbar ul:first li:first").addClass('active');
     }
   });
 });



});