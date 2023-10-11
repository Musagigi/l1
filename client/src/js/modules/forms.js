import checkNumInputs from "./checkNumInputs";

function forms(state) {

	const forms = document.querySelectorAll('form')
	const inputs = document.querySelectorAll('input')
	const phoneInput = 'input[name = "user_phone"]'

	const { loading, success, fail } = {
		loading: 'Загрузка...',
		success: "Спасибо! Скоро мы с вами свяжемся",
		fail: 'Что-то пошло не так...',
	}

	checkNumInputs(phoneInput)

	forms.forEach(form => {
		form.addEventListener('submit', handleSubmit)
	})

	function handleSubmit(event) {
		event.preventDefault()

		let statusMessage = createStatusMessage()
		this.append(statusMessage)

		const formData = new FormData(this)

		if (this.dataset.calc === 'price') {
			for (let [key, value] of Object.entries(state)) {
				formData.append(key, value)
			}
		}


		sendData('http://127.0.0.1:3000/upload', formData)
			.then(response => {
				console.log(response);
				statusMessage.textContent = success
			})
			.catch(() => statusMessage.textContent = fail)
			.finally(() => {
				clearInputs()
				setTimeout(() => statusMessage.remove(), 5000)
			})
	}

	async function sendData(url, data) {
		let statusMessage = document.querySelector('.status')
		statusMessage.textContent = loading

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
		inputs.forEach(item => {
			item.value = ''
		})
	}

}

export default forms