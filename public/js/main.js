/*============================================================================================*/
/*=======================================javascript code==========================================*/
/*============================================================================================*/

/*===================================Initiation parallax effect=====================================*/

// Adapted from @ilonacodes article ->  https://link.medium.com/7fFiON6Q1X
// Update : added throttle to increase performance
window.addEventListener('scroll', throttle(parallax, 14));

function throttle(fn, wait) {
    var time = Date.now();
    return function() {
        if ((time + wait - Date.now()) < 0) {
            fn();
            time = Date.now();
        }
    }
};

function parallax() {
    var scrolled = window.pageYOffset;
    var parallax = document.querySelector(".parallax");
    // You can adjust the 0.8 to change the speed
    var coords = (scrolled * 0.8) + 'px'
    parallax.style.transform = 'translateY(' + coords + ')';
};


/*============================================================================================*/
/*=======================================jquery code==========================================*/
/*============================================================================================*/

$(function() {

    /*===================================Initiation Lightbox=====================================*/
    if ($(window).width() > 992) {
        // $('a.portfolio-box').SimpleLightbox();
        $('a.portfolio-box').simpleLightbox();


    } else {
        $(".portfolio-box").each(function() {
            $(this).removeAttr("href"); //desactiver les lien de cette section 
        });
    }



    /*=======================================Initiation AOS======================================*/
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

    /*=====Setting for section Testimonials: Initiation of carousel (wl Carousel library)========*/
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
    /*===============================Setting smoothly scrolling===================================*/
    $('a[href^="#"]').on('click', function() {
        var the_id = $(this).attr("href");
        if (the_id === '#') {
            return;
        }
        $('html, body').animate({
            scrollTop: (($(the_id).offset()).top) - 70
        }, 1500, 'easeInOutExpo');
        return false;
    });

    /*============Navbar: ============Setting navbar ==================================*/
    //-------------------invisibility of and visibility with background of navbar on scrolling bar
    $(document).on("scroll", function() {
        var $nav = $(".navbar");
        $nav.toggleClass('invisible', $(this).scrollTop() > 40 && $(this).scrollTop() < 499);
        $nav.toggleClass('scrolled', $(this).scrollTop() > 500);
    });
    //----------------------------------------------Navigation active state on scroll or on click 
    /*
    Using jquery waypoints to change active on scroll
    */
    //Default active on home
    if ($(window).width() > 992) {
        $('#header').addClass("active");

        $('#header').waypoint(function() {
            $(".navbar-collapse ul li").children().removeClass("active");
            $(".link1").addClass("active");
        }, { offset: 20 });
        $('#header').waypoint(function() {
            $(".navbar-collapse ul li").children().removeClass("active");
            $(".link1").addClass("active");
        }, { offset: -20 });

        $('#about').waypoint(function() {
            $(".navbar-collapse ul li").children().removeClass("active");
            $(".link2").addClass("active");
        }, { offset: -10 });
        $('#about').waypoint(function() {
            $(".navbar-collapse ul li").children().removeClass("active");
            $(".link2").addClass("active");
        }, { offset: 170 });

        $('#skills').waypoint(function() {
            $(".navbar-collapse ul li").children().removeClass("active");
            $(".link3").addClass("active");
        }, { offset: 68 });
        $('#skills').waypoint(function() {
            $(".navbar-collapse ul li").children().removeClass("active");
            $(".link3").addClass("active");
        }, { offset: 70 });

        $('#portfolio').waypoint(function() {
            $(".navbar-collapse ul li").children().removeClass("active");
            $(".link4").addClass("active");
        }, { offset: -20 });
        $('#portfolio').waypoint(function() {
            $(".navbar-collapse ul li").children().removeClass("active");
            $(".link4").addClass("active");
        }, { offset: 90 });

        $('#experiences').waypoint(function() {
            $(".navbar-collapse ul li").children().removeClass("active");
            $(".link5").addClass("active");
        }, { offset: 90 });
        $('#experiences').waypoint(function() {
            $(".navbar-collapse ul li").children().removeClass("active");
            $(".link5").addClass("active");
        }, { offset: -20 });

        $('#testimonials').waypoint(function() {
            $(".navbar-collapse ul li").children().removeClass("active");
            $(".link6").addClass("active");
        }, { offset: 90 });
        $('#testimonials').waypoint(function() {
            $(".navbar-collapse ul li").children().removeClass("active");
            $(".link6").addClass("active");
        }, { offset: -20 });

        $('#contact').waypoint(function() {
            $(".navbar-collapse ul li").children().removeClass("active");
            $(".link7").addClass("active");
        }, { offset: 90 });
    }
    /*============Navbar on Mobile: ============Setting navbar ==================================*/
    if ($(window).width() < 992) {
        //----add or remove style spécifique to mobile to navbar on clicking on button when scrollbar is on top
        $('.navbar-toggler').on('click', function() {
            if ($('.navbar-toggler').hasClass("collapsed")) {
                $('.navbar').fadeIn('slow', function() {
                    $('.navbar').addClass('styleNav');
                });

            } else {
                $('.navbar').fadeOut('0', function() {
                    $(this).show();
                    $('.navbar').removeClass('styleNav');
                });
            }
        });
        //-------------------------------------------------------close navbar on clicking on navbar link 
        $('.nav-link').on('click', function() {
            $('.navbar-toggler').click();
        });
    }

    /*=================================Setting back to top button=================================*/
    //--------------------------------------fadeIn  and fadout button back to top on scrolling bar
    $(document).on("scroll", function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    //-------------------------------scrolling page to top on clicking on the button back to top
    $('.back-to-top').on("click", function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
        return false;
    });

    /*==================Setting for section Skills: progress bar animated=====================*/
    var offsetTop = $('#skills').offset().top;

    $(document).on("scroll", function() {

        var height = $(window).height();
        if ($(window).scrollTop() + height > offsetTop) {

            jQuery('.bar-container span').each(function() {
                jQuery(this).addClass('progressbar')
            });
        } else {

            jQuery('.bar-container span').each(function() {
                jQuery(this).removeClass('progressbar')
            });
        }
    });


    /*==================Setting for section Portfolio: progress bar animated===================*/
    $(".filterbtn").on("click", function() {
        $(".filterbtn:not(this)").removeClass('filter-active');
        $(this).addClass('filter-active');
        var value = $(this).attr('data-filter');
        if (value == "all") {
            $('.filter').show('1000');
        } else {
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');
        }
    });
    // $(window).on('load', function() {
    //     // Initiate venobox (lightbox feature used in portofilo)
    //     $(document).ready(function() {
    //         $('.venobox').venobox();
    //     });

    // });



    //Jquery fin
});