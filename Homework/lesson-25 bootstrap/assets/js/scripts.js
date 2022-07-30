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
// Header
const header = document.getElementById('header')
console.dir(header)
console.dir(header.scrollIntoView)

// Header
const header = document.getElementById('header')
console.dir(header)
console.dir(header.scrollIntoView)

const btn = document.getElementsByClassName('tag')
console.dir(btn)

// Section-1
const sec_1 = document.getElementById('home')
console.dir(sec_1)
console.dir(sec_1.scrollHeight)

const sec_1_btn = document.getElementById('home-btn')
console.dir(sec_1_btn)
console.dir(sec_1_btn.scrollHeight)

// Section-2
const sec_2 = document.getElementById('services')
console.dir(sec_2)
console.dir(sec_2.scrollHeight)

const sec_2_btn = document.getElementById('services-btn')
console.dir(sec_2_btn)
console.dir(sec_2_btn.scrollHeight)

// Scroll and color function
function handle_button_click_1() {
    // move
    sec_1.scrollIntoView({block: "center", behavior: "smooth"});
    // change color
    // sec_1_btn.classList.add('tag-active')
}
function change_color() {
    sec_1_btn.classList.add('tag-active')

}
 
sec_1_btn.addEventListener('click', handle_button_click_1);
sec_1_btn.addEventListener('click', change_color);

// .offsetTop
// .offsetTop
