
$(document).ready(function () {
    
    $(window).scroll(function() { // check if scroll event happened
        if ($(document).scrollTop() > 500) { // check if user scrolled more than 500 from top of the browser window
          $(".fixed-top").addClass('colorNavbar2'); 
          $(".fixed-top").removeClass('colorNavbar1');
          // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        } else {
            $(".fixed-top").addClass('colorNavbar1'); 
          $(".fixed-top").removeClass('colorNavbar2'); // if not, change it back to transparent
        }
      });


    //initialisation aos
    AOS.init(); 

    // Un défilement animé (« Smooth scroll ») en jQuery sans plugin
    $('a[href^="#"]').click(function () {
        var the_id = $(this).attr("href");
        if (the_id === '#') {
            return;
        }
        $('html, body').animate({
            scrollTop: $(the_id).offset().top
        }, 'slow');
        return false;
    });
});