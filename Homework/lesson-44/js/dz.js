const prices = document.querySelectorAll('.product-carousel-price ins');
const badPrices = document.querySelectorAll('.product-carousel-price del');
console.log(badPrices)

// API
const pbExchange = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

// Get currency data
const sendData = (method, url) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open( method, url )
        xhr.responseType = 'json'

        xhr.onload = () => {
			if( xhr.status >= 400 ) {
				reject( 'Server was access denied' );
			} else if( xhr.status >= 500 ) {
				reject( 'You have server errors' );
			} else {
				resolve( xhr.response );
			}
		}

        xhr.onerror = () => {
			reject('Some errors...');
		}

		xhr.send();
    })
}

const getData = () => {
	return sendData('GET', pbExchange)
        .then(result => result[0])
        .then(currency => {
            // uan = +currency.buy
            // console.log(uan)

            badPrices.forEach(elem => {
                elem.innerText = `${(+currency.buy * elem.innerText.slice(1)).toFixed(0) + ' грн'}`
            })

            prices.forEach(elem => {
                elem.innerText = `${(+currency.buy * elem.innerText.slice(1)).toFixed(0) + ' грн'}`
            })
        })
}
console.log(getData())

// prices.forEach(elem => {
//     elem.innerText = `${elem.innerText.slice(1) * 0}`
// })

console.dir(prices)