// 1
console.log(+"455" + 45);
console.log(parseInt(`35 * 2`) * 2);

const str_1 = '35 * 2'

function mathematical(str) {
    let elem = str.indexOf(' ')
    let num_1 = +str.slice(0, elem)
    let num_2 = +str.slice(elem+2)
    let symb = str.slice(elem+1, elem+2)
    let symbols = ['+', '-', '/', '*']
    let func = [num_1 + num_2, num_1 - num_2, num_1 / num_2 ,num_1 * num_2]

    for (let i = 0; i < symbols.length; i++) {
        if (symb == symbols[i]) {
            return func[i]
        }   
    }
}
console.log(mathematical(str_1))


// 2
console.log(String(45.734));
console.log('45.734');
console.log("45.734");
console.log(`45.734`);
console.log(45.734.toString());
console.log(45.734 + '');
console.log(45.734 + "");
console.log(45.734 + ``);
console.log('' + 45.734);
console.log("" + 45.734);
console.log(`` + 45.734);

// 3
console.log(+'15.8');
console.log(+"234");
console.log(+'2.5' + +'2.7');

// 4
let age = 18;
console.log('Вам ' + age + ' Років');

console.log(`Вам ${age} Років`);

console.log('Ім\'я');
console.log("\"Нептун\"");
console.log("Дуже дивний рядок...");

// 5
const money = 300;

if (money > 30000) {
    console.log('У вас висока зп')
} else {
    console.log('У вас середня зп')
}

// 6 
console.log("Сьогодні сонячний день".length)
