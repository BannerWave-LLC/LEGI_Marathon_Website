const globalMapPins = document.querySelectorAll('.js-global-map-pin');
const globalMapLinks = document.querySelectorAll('.js-global-map-link');

for (const pin of globalMapPins) {
	pin.addEventListener('mouseover', function () {
		const link = document.querySelector(`.js-global-map-link[data-map="${pin.dataset.map}"]`);
		this.classList.add('is-active');
		link.classList.add('is-active');
	});

	pin.addEventListener('mouseout', function () {
		const link = document.querySelector(`.js-global-map-link[data-map="${pin.dataset.map}"]`);
		this.classList.remove('is-active');
		link.classList.remove('is-active');
	})
};

for (const link of globalMapLinks) {
	link.addEventListener('mouseover', function () {
		const pin = document.querySelector(`.js-global-map-pin[data-map="${link.dataset.map}"]`);
		this.classList.add('is-active');
		pin.classList.add('is-active');
	});

	link.addEventListener('mouseout', function () {
		const pin = document.querySelector(`.js-global-map-pin[data-map="${link.dataset.map}"]`);
		this.classList.remove('is-active');
		pin.classList.remove('is-active');
	})
};