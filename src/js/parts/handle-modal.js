import tingle from "tingle.js";

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

const persons = document.querySelectorAll('.js-tile-bio');

persons.forEach(person => {
	person.addEventListener('click', function (event) {
		event.preventDefault();
		
		const modalUrl = this.href;
		fetchModalContent(modalUrl, personModal);
	})
});

function fetchModalContent(url, modal) {
	fetch(url).then(res => res.text()).then(data => {
        modal.setContent(data);
		modal.open();
    })
}