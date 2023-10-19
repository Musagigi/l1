export function popupImage() {

	let works = document.querySelector('.works')
	let popup = document.createElement('div')
	let bigImg = document.createElement('img')

	popup.classList.add('popup')
	popup.append(bigImg)
	works.append(popup)

	popup.style.justifyContent = 'center'
	popup.style.alignItems = 'center'



	works.addEventListener('click', function (event) {
		event.preventDefault()
		let target = event.target

		if (target && target.classList.contains('preview')) {

			popup.style.display = 'flex'


			let hrefBigImg = target.parentNode.getAttribute('href')
			bigImg.setAttribute('src', hrefBigImg)
			document.body.style.overflow = 'hidden'
		}

		if (target && target.matches('div.popup')) {
			popup.style.display = 'none'
			document.body.style.overflow = ''
		}
	})

}
