const filtersTrigger = document.querySelector('.js-filters-trigger');
filtersTrigger.addEventListener('click', function (event) {
	event.preventDefault();

	const href = this.getAttribute('href');
	const filters = document.getElementById(`${href}`);

	this.classList.toggle('is-active');
	filters.classList.toggle('is-active');
})