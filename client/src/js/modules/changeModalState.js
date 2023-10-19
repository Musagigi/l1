import { checkNumInputs } from "./checkNumInputs";

export function changeModalState(state) {
	const nextCalcBtn = document.querySelector('.popup_calc_button')
	const profileCalcBtn = document.querySelector('.popup_calc_profile_button')

	const windowForm = document.querySelectorAll('.balcon_icons_img')
	const windowWidth = document.querySelectorAll('#width')
	const windowHeight = document.querySelectorAll('#height')
	const windowType = document.querySelectorAll('#view_type')
	const windowProfile = document.querySelectorAll('.checkbox')

	checkNumInputs('#width')
	checkNumInputs('#height')

	function btnDisabled(btn) {
		btn.disabled = true
	}

	btnDisabled(nextCalcBtn)
	btnDisabled(profileCalcBtn)

	function testNextCalcBtn() {
		nextCalcBtn.disabled = state.width && state.height ? false : true
		profileCalcBtn.disabled = state.type && state.profile ? false : true
	}

	function bindActionToElems(eventHandler, elem, keyName) {
		elem.forEach((item, index) => {

			item.addEventListener(eventHandler, () => {

				switch (item.nodeName) {
					case 'SPAN':
						state[keyName] = index
						break
					case 'INPUT':
						if (item.getAttribute('type') === 'checkbox') {
							state[keyName] = index === 0 ? 'Холодное' : 'Теплое'
							elem.forEach((box, j) => {
								box.checked = index === j
							})
						} else {
							state[keyName] = item.value
						}
						break
					case 'SELECT':
						state[keyName] = item.value
						break
				}
				testNextCalcBtn()
				console.log(state);
			})
		})
	}

	bindActionToElems('click', windowForm, 'form')
	bindActionToElems('input', windowWidth, 'width')
	bindActionToElems('input', windowHeight, 'height')
	bindActionToElems('change', windowType, 'type')
	bindActionToElems('change', windowProfile, 'profile')
}
