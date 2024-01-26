import Swiper from 'swiper/bundle';
import { Grid, Navigation, Pagination } from 'swiper/modules';

Swiper.use([Grid, Navigation, Pagination]);

const sliderTags = new Swiper('.js-slider-tags', {
    slidesPerView: 'auto',
    spaceBetween: 16, 
});

const sliderPartnersOptions = {
    init: false,
    spaceBetween: 14,
    watchOverflow: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    on: {
        touchStart: function (swiper, event) {
            const target = event.target;

            if (target.classList.contains('js-tags') || target.parentNode.classList.contains('js-tags')) {
                swiper.allowTouchMove = false;
                return;
            }

            swiper.allowTouchMove = true;
        },
        on: {
            init: function (swiper) {
                if (swiper.slides.length === 1) {
                    this.el.classList.add('one-item');
                } else {
                    this.el.classList.remove('one-item');
                }
            }
        }
    }
};

const sliderBaseOptions = {
    slidesPerView: 1,
    loop: true,
    autoHeight: true,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    on: {
        init: function (swiper) {
            if (swiper.slides.length === 1) {
                this.el.classList.add('one-item');
            } else {
                this.el.classList.remove('one-item');
            }
        }
    }
};

let sliderPartners = new Swiper('.js-slider-partners', sliderPartnersOptions);
let sliderAwards = new Swiper('.js-slider-awards', sliderBaseOptions);
let sliderEvents = new Swiper('.js-slider-events', sliderBaseOptions);

if (document.querySelector('.js-slider-partners') !== null) {
    window.addEventListener('load', function () {
        if  (window.outerWidth > 767 && document.querySelector('.js-slider-partners').classList.contains('swiper-initialized')) {
            sliderPartners.destroy(true, true);
        }
        
        if (window.outerWidth < 767 && !document.querySelector('.js-slider-partners').classList.contains('swiper-initialized')) {
            sliderPartners = new Swiper('.js-slider-partners', sliderPartnersOptions);
            sliderPartners.init();
        }
    })
    
    window.addEventListener('resize', function () {
        if  (window.outerWidth > 767 && document.querySelector('.js-slider-partners').classList.contains('swiper-initialized')) {
            sliderPartners.destroy(true, true);
        }

        if  (window.outerWidth > 767 && document.querySelector('.js-slider-awards').classList.contains('swiper-initialized')) {
            sliderAwards.destroy(true, true);
        }

        if  (window.outerWidth > 767 && document.querySelector('.js-slider-events').classList.contains('swiper-initialized')) {
            sliderEvents.destroy(true, true);
        }
        
        if (window.outerWidth < 767 && !document.querySelector('.js-slider-partners').classList.contains('swiper-initialized')) {
            sliderPartners = new Swiper('.js-slider-partners', sliderPartnersOptions);
            sliderPartners.init();
        }

        if (window.outerWidth < 767 && !document.querySelector('.js-slider-awards').classList.contains('swiper-initialized')) {
            sliderAwards = new Swiper('.js-slider-awards', sliderBaseOptions);
            sliderAwards.init();
        }

        if (window.outerWidth < 767 && !document.querySelector('.js-slider-events').classList.contains('swiper-initialized')) {
            sliderEvents = new Swiper('.js-slider-events', sliderBaseOptions);
            sliderEvents.init();
        }
    })
}

if (document.querySelector('.js-slider-awards') !== null) {
    window.addEventListener('load', function () {
        if  (window.outerWidth > 767 && document.querySelector('.js-slider-awards').classList.contains('swiper-initialized')) {
            sliderAwards.destroy(true, true);
        }

        if (window.outerWidth < 767 && !document.querySelector('.js-slider-awards').classList.contains('swiper-initialized')) {
            sliderAwards = new Swiper('.js-slider-awards', sliderBaseOptions);
            sliderAwards.init();
        }
    })
    
    window.addEventListener('resize', function () {
        if  (window.outerWidth > 767 && document.querySelector('.js-slider-awards').classList.contains('swiper-initialized')) {
            sliderAwards.destroy(true, true);
        }

        if (window.outerWidth < 767 && !document.querySelector('.js-slider-awards').classList.contains('swiper-initialized')) {
            sliderAwards = new Swiper('.js-slider-awards', sliderBaseOptions);
            sliderAwards.init();
        }
    })
}

if (document.querySelector('.js-slider-events') !== null) {
    window.addEventListener('load', function () {
        if  (window.outerWidth > 767 && document.querySelector('.js-slider-events').classList.contains('swiper-initialized')) {
            sliderEvents.destroy(true, true);
        }

        if (window.outerWidth < 767 && !document.querySelector('.js-slider-events').classList.contains('swiper-initialized')) {
            sliderEvents = new Swiper('.js-slider-events', sliderBaseOptions);
            sliderEvents.init();
        }
    })
    
    window.addEventListener('resize', function () {
        if  (window.outerWidth > 767 && document.querySelector('.js-slider-events').classList.contains('swiper-initialized')) {
            sliderEvents.destroy(true, true);
        }

        if (window.outerWidth < 767 && !document.querySelector('.js-slider-events').classList.contains('swiper-initialized')) {
            sliderEvents = new Swiper('.js-slider-events', sliderBaseOptions);
            sliderEvents.init();
        }
    })
}



const sliderLogos = new Swiper('.js-slider-logos', sliderBaseOptions);