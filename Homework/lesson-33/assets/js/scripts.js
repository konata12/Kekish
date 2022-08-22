const f_1 = question => {return prompt(question)}

console.log(f_1('хто'))
console.log(f_1('де'))
console.log(f_1('коли'))


const person = {
	name: 'Aboba',
	age: 'Abobus',
	sayHello: function() {
		return `Доброго дня, ${this.name}. Вам ${this.age} років`
	}
}
console.log(person.sayHello())