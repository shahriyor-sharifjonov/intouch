import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';

const swiper = new Swiper('.partners__swiper', {
    loop: true,
    slidesPerView: 2,
    modules: [Autoplay],
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    breakpoints: {
        576: {
            slidesPerView: 4,
        },
    }
});

const swiper2 = new Swiper('.whyus__swiper', {
    slidesPerView: "auto",
    spaceBetween: 16,
    modules: [Pagination],
    pagination: {
        el: '.whyus-pagination',
        type: 'bullets',
        clickable: true,
    },
});