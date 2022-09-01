function setOrder() {
	event.preventDefault()

	const order = document.createElement('div')
	const every_order = document.querySelector('#res')
	const order_info = document.getElementById('set-order').children

	order.innerHTML =  `<p>Ім'я: ${ order_info[0].value }</p>
						<p>№ столика: ${ order_info[1].value }</p>
						<p>Перше: ${ order_info[2].value }</p>
						<p>Друге: ${ order_info[3].value }</p>
						<p>Напій: ${ order_info[4].value }</p>`

	every_order.appendChild(order)
}

document.getElementById('set-order').addEventListener('submit', setOrder);