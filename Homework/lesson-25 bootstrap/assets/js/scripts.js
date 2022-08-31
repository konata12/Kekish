// Header
const header = document.getElementById('header')

// Section-1
const sec_1 = document.getElementById('home')
const sec_1_btn = document.getElementById('home-btn')

// Section-2
const sec_2 = document.getElementById('services')
const sec_2_btn = document.getElementById('services-btn')

// Section-3
const sec_3 = document.getElementById('team')
const sec_3_btn = document.getElementById('about-btn')

// Section-4
const sec_4 = document.getElementById('portfolios')
const sec_4_btn = document.getElementById('work-btn')

// Section-5
const sec_5 = document.getElementById('contacts')
const sec_5_btn = document.getElementById('contacts-btn')

// Колбеки
function change_color() {
    if ( (header.getBoundingClientRect().top + 1) <= (sec_1.getBoundingClientRect().top + sec_1.clientHeight - 1) ) {
        sec_1_btn.classList.add('tag-active')
        sec_2_btn.classList.remove('tag-active')
        sec_3_btn.classList.remove('tag-active')
        sec_4_btn.classList.remove('tag-active')
        sec_5_btn.classList.remove('tag-active')
    } else if ( (header.getBoundingClientRect().top + 1) <= (sec_2.getBoundingClientRect().top + sec_2.clientHeight - 1) ) {
        sec_2_btn.classList.add('tag-active')
        sec_1_btn.classList.remove('tag-active')
        sec_3_btn.classList.remove('tag-active')
        sec_4_btn.classList.remove('tag-active')
        sec_5_btn.classList.remove('tag-active')
    } else if ( (header.getBoundingClientRect().top + 1) <= (sec_3.getBoundingClientRect().top + sec_3.clientHeight - 1) ) {
        sec_3_btn.classList.add('tag-active')
        sec_1_btn.classList.remove('tag-active')
        sec_2_btn.classList.remove('tag-active')
        sec_4_btn.classList.remove('tag-active')
        sec_5_btn.classList.remove('tag-active')
    } else if ( (header.getBoundingClientRect().top + 1) <= (sec_4.getBoundingClientRect().top + sec_4.clientHeight - 1) ) {
        sec_4_btn.classList.add('tag-active')
        sec_1_btn.classList.remove('tag-active')
        sec_2_btn.classList.remove('tag-active')
        sec_3_btn.classList.remove('tag-active')
        sec_5_btn.classList.remove('tag-active')
    } else if ( (header.getBoundingClientRect().top + 1) <= (sec_5.getBoundingClientRect().top + sec_5.clientHeight - 1) ) {
        sec_5_btn.classList.add('tag-active')
        sec_1_btn.classList.remove('tag-active')
        sec_2_btn.classList.remove('tag-active')
        sec_3_btn.classList.remove('tag-active')
        sec_4_btn.classList.remove('tag-active')
    }
}

function handle_button_click_1() {
    sec_1.scrollIntoView({block: "start", behavior: "smooth"});
}

function handle_button_click_2() {
    sec_2.scrollIntoView({block: "start", behavior: "smooth"});
}

function handle_button_click_3() {
    sec_3.scrollIntoView({block: "start", behavior: "smooth"});
}

function handle_button_click_4() {
    sec_4.scrollIntoView({block: "start", behavior: "smooth"});
}

function handle_button_click_5() {
    sec_5.scrollIntoView({block: "start", behavior: "smooth"});
}

// Події
change_color()
window.addEventListener('scroll', change_color)

sec_1_btn.addEventListener('click', handle_button_click_1)
sec_2_btn.addEventListener('click', handle_button_click_2)
sec_3_btn.addEventListener('click', handle_button_click_3)
sec_4_btn.addEventListener('click', handle_button_click_4)
sec_5_btn.addEventListener('click', handle_button_click_5)
