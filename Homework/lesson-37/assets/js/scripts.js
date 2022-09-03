function clock() {
    let date = new Date()
    let month = date.getMonth()
    let month_day = date.getDate()
    let week_day = date.getDay()
    let hour = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

    const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
    const months = ['jan', 'feb', 'mur', 'apr', 'may', 'jun', 
                    'jul', 'aug', 'sep', 'oct', 'nov', 'sec', ]

    week_day = days[week_day]
    month = months[month]

    
    if (hour < 10) ddocument.querySelector('.hour').innerText = `0${hour}`
    else document.querySelector('.hour').innerText = `${hour}`

    if (min < 10) document.querySelector('.min').innerText = `0${min}`
    else document.querySelector('.min').innerText = `${min}`

    document.querySelector('.day').innerText = `${week_day.toUpperCase()}`

    if (month_day < 10) document.querySelector('.month').innerText = `${month.toUpperCase()} 0${month_day}`
    else document.querySelector('.month').innerText = `${month.toUpperCase()} ${month_day}`

    if (sec < 10) document.querySelector('.sec').innerText = `0${sec}`
    else document.querySelector('.sec').innerText = `${sec}`
}

// Анімація заднього фону
const anim = document.querySelector('.animation')
console.dir(anim)
function bg() {
    let div = document.createElement('div')
    div.classList.add('circle')
    div.style.top = Math.floor(Math.random() * anim.clientHeight) + 'px'
    div.style.left = Math.floor(Math.random() * anim.clientWidth) + 'px'
    anim.append(div)
    setTimeout(() => div.remove(), 3000)
}
setInterval(bg, 100)

// Годинник
clock()
setInterval(clock, 1000)