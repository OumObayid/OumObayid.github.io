// Activate SimpleLightbox plugin for portfolio items
new SimpleLightbox({
    elements: '#portfolio a.portfolio-box'
});



/*============================================================================================*/
/*=======================================jquery code==========================================*/
/*============================================================================================*/
$(function() {

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
    $(document).on('scroll', function() {
        var $nav = $(".navbar");
        $nav.toggleClass('invisible', $(this).scrollTop() > 40 && $(this).scrollTop() < 499);
        $nav.toggleClass('scrolled', $(this).scrollTop() > 500);
    });
    //----------------------------------------------Navigation active state on scroll or on click 
    var sections = $('.section'),
        nav = $('.navbar'),
        nav_height = nav.outerHeight(),
        cur_pos = $(this).scrollTop();

    $(window).on('scroll', function() {
        sections.each(function() {
            var top = ($(this).offset().top) - nav_height,
                bottom = top + $(this).outerHeight();
            //when the cursor is at a section
            if (cur_pos >= top && cur_pos <= bottom) {
                //make all links inactive
                nav.find('a').removeClass('active');
                $(this).addClass('active');
                //make the link of the browsed section active
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
        //when the cursor is at the header
        if (cur_pos >= 0 && cur_pos <= window.innerHeight - nav_height) {
            //make all links inactive
            nav.find('a').removeClass('active');
            //make the link of the header section active
            nav.find('a[href="#header"]').addClass('active');
        }
    });
    //--------------------------------------------scolling to to section when click on the nav link
    nav.find('a').on('click', function() {
        var $el = $(this),
            id = $el.attr('href'),
            deletHeight = 0;
        //80 to change for adaptation
        if (cur_pos <= window.innerHeight && $el.attr('href') == "#about") deletHeight = 80;
        $('html, body').animate({
            scrollTop: ($(id).offset().top) - nav_height - deletHeight
        }, 500);
        return false;
    });

    /*============Navbar on Mobile: ============Setting navbar ==================================*/
    //-----------add or remove background to navbar on clicking on button when scrollbar is on top
    $('.navbar-toggler').on('click', function() {
        if ($('.navbar-toggler').hasClass("collapsed")) {
            $('.navbar').fadeIn('slow', function() {
                $('.navbar').addClass('bgcolorMobilToggle');
            });
        } else {
            $('.navbar').fadeOut('0', function() {
                $(this).show();
                $(this).removeClass('bgcolorMobilToggle');
            });
        }
    });
    //-------------------------------------------------------close navbar on clicking on navbar link 
    $('.nav-link').on('click', function() {
        $('.navbar-toggler').click();
    });

    /*=================================Setting back to top button=================================*/
    //--------------------------------------fadeIn  and fadout button back to top on scrolling bar

    $(window).on("scroll", function() {
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
    $(window).on(scroll(function() {
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
    }));

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





    //Jquery fin
});