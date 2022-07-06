jq2 = jQuery.noConflict();
jq2(function( $ ) {
    $('.owl-carousel-1').owlCarousel({
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        loop:true,
        margin:5,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            },
            1500:{
                items:4
            }
        }
    })
    $('.owl-carousel-2').owlCarousel({
        autoplay:false,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        loop:true,
        dots:true,
        dotsEach:true,
        responsive:{
            0:{
                items:1
            }
        }
    })
    $( "#datepicker" ).datepicker();
});