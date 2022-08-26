console.dir(document)
// Body
const html = document.getElementById('html')
const body = html.children[1]
console.dir(body)

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

// Scroll position


// Scroll and color function
function handle_button_click_1() {
    sec_1.scrollIntoView({block: "center", behavior: "smooth"});
}
sec_1_btn.addEventListener('click', handle_button_click_1())

function handle_button_click_2() {
    sec_2.scrollIntoView({block: "center", behavior: "smooth"});
}
sec_2_btn.addEventListener('click', handle_button_click_2())

console.dir(header.getBoundingClientRect().top)
console.dir(sec_1.getBoundingClientRect().top + sec_1.clientHeight - 1)
console.dir(sec_2.getBoundingClientRect().top + sec_2.clientHeight - 1)

function change_color() {
    if ( (header.getBoundingClientRect().top) <= (sec_1.getBoundingClientRect().top + sec_1.clientHeight - 1) ) {
        sec_1_btn.classList.add('tag-active')
    } else if ( (header.getBoundingClientRect().top) <= (sec_2.getBoundingClientRect().top + sec_1.clientHeight - 1) ) {
        sec_2_btn.classList.add('tag-active')
    }
}
change_color()

let e = 1

// body.addEventListener('scroll', change_color())
body.addEventListener('onscroll', function(e) {
    console.log(e)
})

// Section-3 img
const img = document.querySelector('.section-3 .section-2_item-img img')
console.dir(img)
console.clear()