const body = document.body;
const nav = document.querySelector('.js-nav');
const navTrigger = document.querySelector('.js-nav-trigger');
const navClose = document.querySelector('.js-nav-close');

navTrigger.addEventListener('click', function(event) {
    event.preventDefault();

    body.classList.add('has-open-nav');
    nav.classList.add('is-active');
});

navClose.addEventListener('click', function(event) {
    event.preventDefault();

    body.classList.remove('has-open-nav');
    nav.classList.remove('is-active');
});