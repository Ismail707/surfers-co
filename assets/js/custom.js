(function($) {
	'use strict';
	jQuery(document).on('ready', function(){

        // START MENU JS
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 100) {
                $('.navbar-light').addClass('menu-shrink');
            } else {
                $('.navbar-light').removeClass('menu-shrink');
            }
        });			
     
        $('.navbar-nav .nav-item .nav-link').on('click', function(e){
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1500);
            e.preventDefault();
        });
       
        $(document).on('click','.navbar-collapse.show',function(e) {
            if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
                $(this).collapse('hide');
            }
        });	
        // END MENU JS	

        // Team Slider //
        $('.portfolio-slider').owlCarousel({
            loop:true,
            margin:0,
            nav: true,
            dots: false,
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            navText: [
                " <i class='icofont-arrow-left'></i>",
                " <i class='icofont-arrow-right'></i>",
            ],
            
            responsive:{
                0:{
					items:1
				},
				600:{
					items:1
				},
				768:{
					items:2
				},
				1024:{
					items:4
				}
            }
        });

        // End Team Slider //


        // Home Slider JS
        $('.home-slider').owlCarousel({
            items:1,
            loop:true,
            margin:10,
            nav: true,
            autoplay: false,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            dots: false,
            navText: [
                " <i class='icofont-arrow-right'></i>",
                " <i class='icofont-arrow-left'></i>",
            ],
        });
    });
  
     // PRELOADER
     jQuery(window).on('load',function(){
        jQuery(".spinner").fadeOut(500);
    });

    // WOW JS
    new WOW().init();

    // Back to top 
    $('body').append('<div id="toTop" class="back-to-top-btn"><i class="icofont-scroll-long-up"></i></div>');
        $(window).scroll(function () {
            if ($(this).scrollTop() != 0) {
                $('#toTop').fadeIn();
            } else {
            $('#toTop').fadeOut();
        }
    }); 
    $('#toTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });	
})(jQuery);