const prevIcon = '<img src="../img/arrow-left.png" alt="prev">'
const nextIcon = '<img src="../img/arrow-right.png" alt="next">'

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        nav:true,
        dots:true,
        navText: [
            prevIcon,
            nextIcon
        ],
        responsive:{
            0:{
                items:1
            }
        }
    });
});