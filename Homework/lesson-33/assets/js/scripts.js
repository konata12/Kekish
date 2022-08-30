// Задача 1
// const f_1 = question => {return prompt(question)}

// console.log(f_1('хто'))
// console.log(f_1('де'))
// console.log(f_1('коли'))

// // Задача 2
// const person = {
// 	name: 'Aboba',
// 	age: 'Abobus',
// 	sayHello: function() {
// 		return `Доброго дня, ${this.name}. Вам ${this.age} років`
// 	}
// }
// console.log(person.sayHello())

// Задача 3
let askList = [
	'Як вас звати?', 
	'Скільки вам років?', 
	'Ви одружені/заміжні?',
	'Ким ви працюєте?',
	'Яка у вас ЗП?',
	'Де ви були за кордоном останній раз?'
]

let answers = {
	name: null,
	age: null,
	family: null,
	job: null,
	salery: null,
	abroad: null
}
console.log(answers)

let arr = [];
function askFunc() {
	arr = askList.map( elem => prompt(`${elem}`))
	console.log(arr)
}
askFunc()
console.log(arr)

// let i = 0
// for (let key in answers) {
// 	console.log(arr[i])
// 	answers[key] = arr[i]
// 	i++
// }
// console.log(answers)

[answers['name'], answers['age'], answers['family'], answers['job'], answers['salery'], answers['abroad']] = arr
console.log(answers)