let employees = [
	{
		id: 1,
		fName: 'Олег', lName: 'Смірнов',
		age: 18,
		position: 'Менеджер з реклами',
		salaryPerMonth: [ 324, 723, 921, 874, 900, 634, 798, 900, 901, 975, 1020, 1200 ]
	},
	{
		id: 2,
		fName: 'Ольга', lName: 'Іванова',
		age: 25,
		position: 'Адміністратор',
		salaryPerMonth: [ 564, 632, 577, 600, 750, 710, 701, 765, 800, 810, 800, 850 ]
	},
	{
		id: 3,
		fName: 'Максим', lName: 'Остапенко',
		age: 23,
		position: 'web-розробник',
		salaryPerMonth: [ 2314, 2321, 2333, 2431, 2400, 2534, 2200, 2132, 2278, 2342, 2478, 2500 ]
	},
	{
		id: 4,
		fName: 'Роман', lName: 'Андрієнко',
		age: 43,
		position: 'Генеральний директор',
		salaryPerMonth: [ 3120, 3452, 3400, 3467, 3764, 3809, 3800, 3900, 3967, 4000, 4345, 4534 ]
	},
	{
		id: 5,
		fName: 'Карина', lName: 'Шевченко',
		age: 27,
		position: 'PM-менеджер',
		salaryPerMonth: [ 1233, 1222, 1256, 1100, 1700, 1300, 1546, 1645, 1608, 1700, 1700, 1750 ]
	}
];

// Фільтрую
employees = employees.filter(elem => elem.age >= 20 && elem.age <=30)
console.log(employees)

// Шукаю річну зп
employees = employees.map( (elem, i, arr) => {
    // console.log( elem.salaryPerMonth.reduce( (prev, current) => {return prev + current}, 0 ) );
    // console.log(elem.slalryPerYear);
    
    return elem = {
        id: elem.id,
		fName: elem.fName, lName: elem.lName,
		age: elem.age,
		position: elem.position,
		salaryPerMonth: elem.salaryPerMonth,
        salaryPerYear: elem.salaryPerMonth.reduce( (prev, current) => {return prev + current}, 0 )
    }

    // Ця паскуда працює і виводить, але наступна паскуда не виводить
    // elem.slalryPerYear = elem.salaryPerMonth.reduce( (prev, current) => {return prev + current}, 0 );
    // console.log(elem);
})
console.dir(employees)
console.dir( employees[0].salaryPerYear )
console.dir( employees[1].salaryPerYear )
console.dir( employees[2].salaryPerYear )

// Вивожу
employees.forEach( elem => {
    if ( elem.salaryPerYear <= 10000) {
        document.getElementById('personal-list').innerHTML += `
        <ul>
            <li><strong>id: ${elem.id}</strong></li>
            <li><strong>Ім'я: ${elem.fName}</strong></li>
            <li><strong>Прізвище: ${elem.lName}</strong></li>
            <li><strong>Вік: ${elem.age}</strong></li>
            <li><strong>Посада: ${elem.position}</strong></li>
            <li><strong>ЗП: ${elem.salaryPerYear}</strong></li>
            <li><strong>Надбавка: ${(elem.salaryPerYear * 0.05).toFixed()}</strong></li>
        </ul>`;
        console.log(1)
    } else {
        document.getElementById('personal-list').innerHTML += `
        <ul>
            <li><strong>id: ${elem.id}</strong></li>
            <li><strong>Ім'я: ${elem.fName}</strong></li>
            <li><strong>Прізвище: ${elem.lName}</strong></li>
            <li><strong>Вік: ${elem.age}</strong></li>
            <li><strong>Посада: ${elem.position}</strong></li>
            <li><strong>ЗП: ${elem.salaryPerYear}</strong></li>
        </ul>`;
    }
})