import checkNumInputs from "./checkNumInputs";

const forms = () => {

	const form = document.querySelectorAll('form'),
		input = document.querySelectorAll('input');


	checkNumInputs(input[name = "user_phone"])

	const message = {
		loading: 'Загрузка...',
		success: "Спасибо! Скоро мы с вами свяжемся",
		failure: 'Что-то пошло не так...',
	}

	const postData = async (url, data) => {
		document.querySelector('.status').textContent = message.loading

		let result = await fetch(url, {
			method: 'POST',
			body: data,
		})

		return await result.text()
	}

	const clearInputs = () => {
		input.forEach(item => {
			item.value = ''
		})
	}

	form.forEach(item => {
		item.addEventListener('submit', event => {
			event.preventDefault()

			let statusMessage = document.createElement('div')
			statusMessage.classList.add('status')
			item.append(statusMessage)

			const formData = new FormData(item)

			postData('src/assets/server.php', formData)
				.then(response => {
					console.log(response);
					statusMessage.textContent = message.success
				})
				.catch(() => statusMessage.textContent = message.failure)
				.finally(() => {
					clearInputs()
					setTimeout(() => { statusMessage.remove() }, 5000)
				})
		})
	})
}

export default forms