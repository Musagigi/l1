function modals() {

	function bindModal(btnOpenSelector, modalSelector, btnCloseSelector, closeClickOverlay = true) {

		const btnOpen = document.querySelectorAll(btnOpenSelector)
		const modal = document.querySelector(modalSelector)
		const btnClose = document.querySelector(btnCloseSelector)
		const popupWindows = document.querySelectorAll('[data-modal]')

		btnOpen.forEach(btn => {
			btn.addEventListener('click', (event) => {
				if (event.target) {
					event.preventDefault()
				}

				closePopupWindows(popupWindows)

				modal.style.display = 'block'
				document.body.style.overflow = 'hidden'
			})
		})

		btnClose.addEventListener('click', () => {
			closePopupWindows(popupWindows)
			modalDisplayNone(modal)
		})

		modal.addEventListener('click', (event) => {
			if (event.target === modal && closeClickOverlay) {
				closePopupWindows(popupWindows)
				modalDisplayNone(modal)
			}
		})
	}

	function closePopupWindows(popupWindows) {
		popupWindows.forEach(popup => {
			popup.style.display = 'none'
		})
	}

	function modalDisplayNone(modal) {
		modal.style.display = 'none'
		document.body.style.overflow = ''
	}

	function showModalByTime(selector, time) {
		setTimeout(() => {
			document.querySelector(selector).style.display = 'block';
			document.body.style.overflow = 'hidden';
		}, time)
	}

	bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
	bindModal('.phone_link', '.popup', '.popup .popup_close');
	bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close')
	bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false)
	bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false)
	showModalByTime('.popup_engineer', 60000)
}

export default modals;