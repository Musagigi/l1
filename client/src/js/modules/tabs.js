export function tabs(headerSelector, tabSelector, contentSelector, activeClass, display = 'block') {

	const headerSlider = document.querySelector(headerSelector)
	const tabs = document.querySelectorAll(tabSelector)
	const content = document.querySelectorAll(contentSelector)

	headerSlider.addEventListener('click', (event) => {
		const targetTab = event.target.closest(tabSelector)

		if (targetTab && headerSlider.contains(targetTab)) {

			tabs.forEach((item, index) => {

				if (targetTab === item) {
					hideTabContent()
					showTabContent(index)
				}
			})
		}
	})

	function hideTabContent() {
		tabs.forEach(elem => {
			elem.classList.remove(activeClass)
		})

		content.forEach(elem => {
			elem.style.display = 'none'
		})
	}

	function showTabContent(indexElem = 0) {
		tabs[indexElem].classList.add(activeClass)
		content[indexElem].style.display = display
	}

	hideTabContent()
	showTabContent()
}
