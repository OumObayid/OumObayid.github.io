//initialisation aos
AOS.init(); 

$(document).ready(function () {
     //navbar
    $(document).scroll(function () {
      var $nav = $(".navbar");
    //   $nav.toggleClass('invisible',$(this).scrollTop()> 200 && $(this).scrollTop()<499);
      $nav.toggleClass('scrolled', $(this).scrollTop() > 500);
    }); 

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