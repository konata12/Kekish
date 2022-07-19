'use strict'

// rectangle
const a = +prompt('Введіть ширину', 0);
const b = +prompt('Введіть довжину', 0);

const rectangle = a * b;
console.log(rectangle);

// circle
const r = +prompt('Введіть радіус', 0);
const pi = 3.1415;

const circle = r * r * pi;
console.log(circle);

// power
const c = +prompt('Введіть число', 0);
const n = +prompt('Введіть степінь', 0);

const power = c ** n;
console.log(power);