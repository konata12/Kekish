const cars = [
	{img: 'assets/img/img-1.webp',
	car: 'Audi',
	model: 'A6',
	age: 2014,
	price: 20900},

	{img: 'assets/img/img-2.webp',
	car: 'Mazda',
	model: '6',
	age: 2015,
	price: 5500},

	{img: 'assets/img/img-3.webp',
	car: 'Hyundai',
	model: 'Tucson IDEAL',
	age: 2018,
	price: 25800},

	{img: 'assets/img/img-4.webp',
	car: 'Mazda',
	model: '6 Grand Touring',
	age: 2015,
	price: 13600},

	{img: 'assets/img/img-5.webp',
	car: 'Porsche',
	model: 'Panamera',
	age: 2010,
	price: 25000},

	{img: 'assets/img/img-6.webp',
	car: 'Mercedes-Benz',
	model: 'CLS 220 Shooting',
	age: 2017,
	price: 39500},

	{img: 'assets/img/img-7.webp',
	car: 'Nissan',
	model: 'X-Trail 4x4 GAZ',
	age: 2010,
	price: 17500},

	{img: 'assets/img/img-8.webp',
	car: 'Opel',
	model: 'Zafira ERODYNAMIC OPS SPORT',
	age: 2009,
	price: 7490},

	{img: 'assets/img/img-9.webp',
	car: 'BMW',
	model: 'X5 M',
	age: 2019,
	price: 92000},

	{img: 'assets/img/img-10.webp',
	car: 'Ford',
	model: 'Focus SE flex fuel',
	age: 2015,
	price: 8800}
]

let div = document.createElement('div');
   	div.className = 'cars-list';
   	for (let key of cars) {
      	let div_child = document.createElement('div');
      	div_child.className = 'cars-list__item';
      	div_child.innerHTML = 
	  	`<img src='${key.img}'></img>
		<p>Марка: ${key.car}</p>
		<p>Модель: ${key.model}</p>
		<p>Рік випуску: ${key.age}</p>
		<p>Ціна: ${key.price}</p>`;
      	div.append(div_child);
}
document.body.append(div);