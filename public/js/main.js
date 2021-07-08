//initialisation aos
AOS.init(); 

//jquery code
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
    var lang = {
      "html": "98%",
      "css": "95%",
      "javascript": "75%",
      "bootstrap" : "80%",
      "photoshop"  : "65%",
      "react" : "65%",
      "php": "70%",
      "wordpress" : "70%",
      "asp" : "50%",
      "sql": "65%"
    };
    
    var multiply = 4;
    var duration = 2;
    var delay = 700;
    $.each( lang, function( language, pourcent) {  
      setTimeout(function() {
        $('#'+language+'-pourcent').fadeIn("slow").html(pourcent);
      },duration + delay*multiply);
      
      multiply++;
    
    });




//Jquery fin
});