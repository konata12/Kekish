// 1
let srt_1 = "Скоро до нас прийде літо"
let reg_1 = /літо/gi
let res_1 = srt_1.replace(reg_1, 'зима')

console.log(res_1)

// 2
let srt_2 = "            На морі вирує ураган   "
let res_2 = srt_2.trim()

console.log(res_2)

// 3
const arr = [
    'Sweet TV - це інтерактивний IPTV провайдер в Україні.',
    'MEGOGO - міжнародний медіасервіс у Східній Європі для перегляду відео, ТБ та прослуховування аудіо.',
    'Netflix - американська розважальна компанія, постачальник фільмів та серіалів на основі потокового мультимедіа.',
];
let res_3 = ''
let reg_3 = /Netflix/gi
arr.forEach(elem => {
    if (reg_3.test(`${elem}`)) res_3 = elem
})

console.log(res_3)

// 4
let srt_4 = "В майбутньому, 2900 році, на 1 млн. людей буде припадати 10 осіб, які матимуть супер здібності :)))"
let reg_4 = /\d+/g
let res_4 = srt_4.replace(reg_4, '0')

console.log(res_4)