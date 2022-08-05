const letter = document.getElementsByClassName('letter')
console.dir(letter)
// .innerHTML

for (key of letter) {
    if ( key.innerHTML === 'e') {
        key.classList.add('e-width')
        console.log(key.clientWidth)
    }
}

for (key of letter) {
    if ( key.innerHTML === 'c') {
        key.classList.add('c-width')
        console.log(key.clientWidth)
    }
}