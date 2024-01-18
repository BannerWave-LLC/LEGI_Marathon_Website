import tingle from "tingle.js";
import Swiper from 'swiper/bundle';
import { Grid, Navigation, Pagination } from 'swiper/modules';

Swiper.use([Grid, Navigation, Pagination]);

const sliderBaseOptions = {
    slidesPerView: 1,
    loop: true,
	autoHeight: true,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
};

const personModal = new tingle.modal({
	cssClass: ['person-modal'],
	onOpen: function() {
        const modalCloseButtons = this.modal.querySelectorAll('.js-modal-close');

		modalCloseButtons.forEach(closeButton => {
			closeButton.addEventListener('click', function (event) {
				event.preventDefault();

				personModal.close();
			})
		})
    },
});

const transactionModal = new tingle.modal({
	cssClass: ['person-modal'],
	onOpen: function() {
        const modalCloseButtons = this.modal.querySelectorAll('.js-modal-close');

		modalCloseButtons.forEach(closeButton => {
			closeButton.addEventListener('click', function (event) {
				event.preventDefault();

				transactionModal.close();
			})
		});

		const modalLogosSlides = this.modal.querySelectorAll('.js-slider-logos');

		modalLogosSlides.forEach(logosSlider => {
			new Swiper(logosSlider, sliderBaseOptions);
		});
    },
});

const persons = document.querySelectorAll('.js-tile-bio');

persons.forEach(person => {
	person.addEventListener('click', function (event) {
		event.preventDefault();
		
		const modalUrl = this.href;
		fetchModalContent(modalUrl, personModal);
	})
});

const transactionTriggers = document.querySelectorAll('.js-modal-transaction-trigger');

transactionTriggers.forEach(transactionTrigger => {
	transactionTrigger.addEventListener('click', function (event) {
		event.preventDefault();
		
		const modalUrl = this.href;
		fetchModalContent(modalUrl, transactionModal);
	})
});

function fetchModalContent(url, modal) {
	fetch(url).then(res => res.text()).then(data => {
        modal.setContent(data);
		modal.open();
    })
}