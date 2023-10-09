import checkNumInputs from "./checkNumInputs";

const forms = function () {

	const form = document.querySelectorAll('form')
	const input = document.querySelectorAll('input')
	const phoneInput = 'input[name = "user_phone"]'

	const message = {
		loading: 'Загрузка...',
		success: "Спасибо! Скоро мы с вами свяжемся",
		fail: 'Что-то пошло не так...',
	}

	checkNumInputs(phoneInput)

	form.forEach(item => {
		item.addEventListener('submit', function (event) {
			event.preventDefault()

			let statusMessage = createStatusMessage()
			item.append(statusMessage)

			const formData = new FormData(item)

			sendData('http://127.0.0.1:3000/upload', formData)
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

		let response = await fetch(url, {
			method: 'POST',
			body: data,
		})

		return await response.text()
	}

	function createStatusMessage() {
		let statusMessage = document.createElement('div')
		statusMessage.classList.add('status')
		return statusMessage
	}

	function clearInputs() {
		input.forEach(item => {
			item.value = ''
		})
	}

}

export default forms