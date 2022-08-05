const names = [
    'Biba', 'Boba', 'Ne Biba', 'Ne boba', 'Bob',
    'Ne Bob', 'Maks', 'Ne Maks', 'Ragnar', 'Ne ragnar'
]

for ( let i = 0; i <= names.length; i++ ) {
    console.log(names[i])
}

console.log('---------------1')

for ( key in names ) {
    console.log(names[key])
}

console.log('---------------2')

for ( key of names ) {
    console.log(key)
}

console.log('---------------3')
let i = 0

while ( i <= names.length ) {
    console.log(names[i])
    i++
}

console.log('---------------4')
let j = 0

do {
    console.log(names[j])
    j++
} while ( j <= names.length )

console.log('---------------5')

names.forEach( function (key) {
    console.log(key)
})

console.log('---------------6')

names.map( function (key) {
    console.log(key)
})