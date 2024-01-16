import 'slick-carousel';
import Swiper from 'swiper/bundle';
import { Grid, Navigation, Pagination } from 'swiper/modules';

Swiper.use([Grid, Navigation, Pagination]);

const sliderPartnersOptions = {
    init: false,
    spaceBetween: 14,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
};

const sliderBaseOptions = {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,
    autoHeight: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
};

let sliderPartners = new Swiper('.js-slider-partners', sliderPartnersOptions);
let sliderAwards = new Swiper('.js-slider-awards', sliderBaseOptions);
let sliderEvents = new Swiper('.js-slider-events', sliderBaseOptions);

if (document.querySelector('.js-slider-partners') !== null) {
    window.addEventListener('load', function () {
        if  (window.outerWidth > 767 && document.querySelector('.js-slider-partners').classList.contains('swiper-initialized')) {
            sliderPartners.destroy(true, true);
            sliderAwards.destroy(true, true);
            sliderEvents.destroy(true, true);
        }
        
        if (window.outerWidth < 767 && !document.querySelector('.js-slider-partners').classList.contains('swiper-initialized')) {
            sliderPartners = new Swiper('.js-slider-partners', sliderPartnersOptions);
            sliderPartners.init();

            sliderAwards = new Swiper('.js-slider-awards', sliderBaseOptions);
            sliderAwards.init();

            sliderEvents = new Swiper('.js-slider-events', sliderBaseOptions);
            sliderEvents.init();
        }
    })
    
    window.addEventListener('resize', function () {
        if  (window.outerWidth > 767 && document.querySelector('.js-slider-partners').classList.contains('swiper-initialized')) {
            sliderPartners.destroy(true, true);
            sliderAwards.destroy(true, true);
            sliderEvents.destroy(true, true);
        }
        
        if (window.outerWidth < 767 && !document.querySelector('.js-slider-partners').classList.contains('swiper-initialized')) {
            sliderPartners = new Swiper('.js-slider-partners', sliderPartnersOptions);
            sliderPartners.init();

            sliderAwards = new Swiper('.js-slider-awards', sliderBaseOptions);
            sliderAwards.init();

            sliderEvents = new Swiper('.js-slider-events', sliderBaseOptions);
            sliderEvents.init();
        }
    })
}



const sliderLogos = new Swiper('.js-slider-logos', sliderBaseOptions);