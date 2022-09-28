function delay(ms) {
    return new Promise (function(resolve, reject) {
        setTimeout(() => resolve('ok'), ms)
        setTimeout(() => reject(new Error('ne ok')), ms)
    })
}

delay(3000).then(() => alert('виконалось через 3 секунди'));