'use strict'

// rectangle
const a = +prompt('Введіть ширину', 0);
const b = +prompt('Введіть довжину', 0);

const rectangle = a * b;

function f_1(a, b) {
    return a * b
}
console.log(rectangle);
console.log(f_1(a, b));

// circle
const r = +prompt('Введіть радіус', 0);
const pi = 3.1415;

const circle = r * r * pi;

function f_2(r) {
    return r * r * pi
}
console.log(circle);
console.log(f_2(r));

// power
const c = +prompt('Введіть число', 0);
const n = +prompt('Введіть степінь', 0);

const power = c ** n;

function f_3(c, n) {
    return c ** n
}
console.log(power);
console.log(f_3(c, n));