const arr1 = ['a', 'b', 'c', 'd', 'e']

for (const key of arr1) {
    console.log(key)
}

const arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

for (const key in arr2) {
    console.log('value ' + arr1[key])
    console.log('index ' + key)
}

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i])
}
