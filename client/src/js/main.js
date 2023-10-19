// import './slider.js';
import { modals } from '/src/js/modules/modals.js';
import { tabs } from './modules/tabs.js';
import { forms } from './modules/forms.js';
import { changeModalState } from './modules/changeModalState.js';
import { timer } from './modules/timer.js';
import { popupImage } from './modules/popupImage.js';

document.addEventListener('DOMContentLoaded', function () {

	let modalState = {
		form: 0,
		width: '',
		height: '',
		type: '',
		profile: '',
	}
	let deadline = '2023-12-10'

	changeModalState(modalState)
	modals()
	tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active')
	tabs('.decoration_slider', '.no_click', '.decoration_content > div > div',
		'after_click');
	tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block')
	forms(modalState)
	timer('.container1', deadline)
	popupImage()
})