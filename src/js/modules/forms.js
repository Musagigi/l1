import checkNumInputs from "./checkNumInputs";

const forms = function () {

	const form = document.querySelectorAll('form')
	const input = document.querySelectorAll('input')
	const phoneInput = document.querySelectorAll('input[name="user_phone"]')

	const message = {
		loading: 'Загрузка...',
		success: "Спасибо! Скоро мы с вами свяжемся",
		fail: 'Что-то пошло не так...',
	}

	// checkNumInputs(phoneInput)

	form.forEach(item => {
		item.addEventListener('submit', function (event) {
			event.preventDefault()

			let statusMessage = document.createElement('div')
			statusMessage.classList.add('status')
			item.append(statusMessage)

			const formData = new FormData(item)

			sendData('/assets/server.php', formData)
				.then(response => {
					console.log(response);
					statusMessage.textContent = message.success
				})
				.catch(() => statusMessage.textContent = message.fail)
				.finally(() => {
					clearInputs()
					setTimeout(() => { statusMessage.remove() }, 5000)
				})
		})
	})


	async function sendData(url, data) {
		document.querySelector('.status').textContent = message.loading

		let result = await fetch(url, {
			method: 'POST',
			body: data,
		})

		return await result.text()
	}

	function clearInputs() {
		input.forEach(item => {
			item.value = ''
		})
	}

}

export default forms