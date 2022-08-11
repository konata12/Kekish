// const str_1 = prompt('Your name')
// document.getElementById('name').innerHTML = `<h2> ${str_1} </h2>`

// const str_2 = prompt('Your surname')
// document.getElementById('surname').innerHTML = `<h2> ${str_2} </h2>`

// const str_3 = prompt('Your age')
// document.getElementById('age').innerHTML = `<h2> ${str_3} </h2>`

// const str_4 = prompt('Your city')
// document.getElementById('city').innerHTML = `<h2> ${str_4} </h2>`

// const str_5 = prompt('Your job')
// document.getElementById('job').innerHTML = `<h2> ${str_5} </h2>`

const questions = [ 
    {question: 'Your name'}, 
    {question: 'Your surname'}, 
    {question: 'Your age'}, 
    {question: 'Your city'}, 
    {question: 'Your job'} 
]

const block = document.querySelector('.wrap')

console.dir(block)
console.dir(block.children)

// Параша, не працює
// for ( let key of block.children ) {
//     console.dir( block.children.item(0) )
//     // console.log( block.children.indexOf(key) )
// }

// Майже працює
// for ( let key of questions ) {
//     questions[questions.indexOf(key)].answer = prompt(`${questions[questions.indexOf(key)].question}`)
//     // console.dir( questions[questions.indexOf(key)].answer )
//     // console.dir( block.children.item(questions.indexOf(key)) )
//     block.children.item(questions.indexOf(key)).innerText = questions[questions.indexOf(key)].answer
// }

// Той самий результат
// questions.map((elem, i, arr) => {
//     elem.answer = prompt(`${elem.question}`)
//     console.log(elem.answer)
//     // block.children.item(i).innerText = elem.answer
//     block.children.item(i).append(elem.answer)
// })