import checkNumInputs from "./checkNumInputs";

function changeModalState(state) {
	const windowForm = document.querySelectorAll('.balcon_icons_img')
	const windowWidth = document.querySelectorAll('#width')
	const windowHeight = document.querySelectorAll('#height')
	const windowType = document.querySelectorAll('#view_type')
	const windowProfile = document.querySelectorAll('.checkbox')


	checkNumInputs('#width')
	checkNumInputs('#height')

	function bindActionToElems(eventHandler, elem, keyName) {
		elem.forEach((item, index) => {

			item.addEventListener(eventHandler, () => {

				switch (item.nodeName) {
					case 'SPAN':
						state[keyName] = index
						break
					case 'INPUT':
						if (item.getAttribute('type') === 'checkbox') {
							index === 0 ? state[keyName] = 'Холодное' : state[keyName] = 'Теплое'
							elem.forEach((box, j) => {
								box.checked = false
								if (index === j) {
									box.checked = true
								}
							})
						} else {
							state[keyName] = item.value
						}
						break
					case 'SELECT':
						state[keyName] = item.value
						break
				}

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

export default changeModalState