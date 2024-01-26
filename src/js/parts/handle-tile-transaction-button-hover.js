const tileTransactionButtons = document.querySelectorAll('.js-tile-transaction-button');

if ([...tileTransactionButtons].length > 0) {
	for (const button of tileTransactionButtons) {
		button.addEventListener('mouseover', function (event) {
			event.preventDefault();

			this.closest('.js-tile-transaction').classList.add('is-active');
		});

		button.addEventListener('mouseout', function (event) {
			event.preventDefault();

			this.closest('.js-tile-transaction').classList.remove('is-active');
		});
	}
};