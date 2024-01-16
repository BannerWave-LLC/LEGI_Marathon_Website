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

let sliderPartners = new Swiper('.js-slider-partners', sliderPartnersOptions);

if (document.querySelector('.js-slider-partners') !== null) {
    window.addEventListener('load', function () {
        if  (window.outerWidth > 767 && document.querySelector('.js-slider-partners').classList.contains('swiper-initialized')) {
            sliderPartners.destroy(true, true);
        }
        
        if (window.outerWidth < 767 && !document.querySelector('.js-slider-partners').classList.contains('swiper-initialized')) {
            console.log('here');
            sliderPartners = new Swiper('.js-slider-partners', sliderPartnersOptions);
            sliderPartners.init();
        }
    })
    
    window.addEventListener('resize', function () {
        if  (window.outerWidth > 767 && document.querySelector('.js-slider-partners').classList.contains('swiper-initialized')) {
            sliderPartners.destroy(true, true);
        }
        
        if (window.outerWidth < 767 && !document.querySelector('.js-slider-partners').classList.contains('swiper-initialized')) {
            console.log('here2');
            sliderPartners = new Swiper('.js-slider-partners', sliderPartnersOptions);
            sliderPartners.init();
        }
    })
}



const sliderLogos = new Swiper('.js-slider-logos', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

const sliderAwardsOptions = {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,
    autoHeight: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
};

let sliderAwards = new Swiper('.js-slider-awards', sliderAwardsOptions);

if (document.querySelector('.js-slider-awards') !== null) {
    window.addEventListener('load', function () {
        if  (window.outerWidth > 767 && document.querySelector('.js-slider-awards').classList.contains('swiper-initialized')) {
            sliderAwards.destroy(true, true);
        }
        
        if (window.outerWidth < 767 && !document.querySelector('.js-slider-awards').classList.contains('swiper-initialized')) {
            console.log('here');
            sliderAwards = new Swiper('.js-slider-awards', sliderAwardsOptions);
            sliderAwards.init();
        }
    })
    
    window.addEventListener('resize', function () {
        if  (window.outerWidth > 767 && document.querySelector('.js-slider-awards').classList.contains('swiper-initialized')) {
            sliderAwards.destroy(true, true);
        }
        
        if (window.outerWidth < 767 && !document.querySelector('.js-slider-awards').classList.contains('swiper-initialized')) {
            console.log('here2');
            sliderAwards = new Swiper('.js-slider-awards', sliderAwardsOptions);
            sliderAwards.init();
        }
    })
}