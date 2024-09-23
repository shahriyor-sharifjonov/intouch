import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';

const swiper = new Swiper('.partners__swiper', {
    loop: true,
    slidesPerView: 2,
    modules: [Autoplay],
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },

    breakpoints: {
        576: {
            slidesPerView: 4,
        },
    }
});


const swiper3 = new Swiper('.reviews__swiper', {
    loop: true,
    slidesPerView: "auto",
    modules: [Autoplay],
    spaceBetween: 16,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
        576: {
            spaceBetween: 24,
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

var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 0,
  slidesPerView: 4,
  loop: true,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});

var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  loop: true,
  thumbs: {
    swiper: galleryThumbs
  }
});

const headerButton = document.querySelector(".header__button");
const headerMenu = document.querySelector(".header__menu");
const menuLinks = document.querySelectorAll(".header__menu-link");
let menuOpened = false;

const menuToggle = () => {
  menuOpened = !menuOpened;
  headerButton.classList.toggle("open");
  headerMenu.classList.toggle("open");

  // Disable scroll when menu is open
  if (menuOpened) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = ""; // Restore default overflow
  }
};

headerButton.onclick = menuToggle;

window.onclick = (e) => {
  if (
    menuOpened &&
    !e.composedPath().includes(headerButton) &&
    !e.composedPath().includes(headerMenu)
  )
    menuToggle();
};

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuToggle();
  });
});


if(document.querySelector('.catalog__btn')){
  const btns = document.querySelectorAll('.catalog__btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(q => {
        q.classList.remove('active')
      })
      btn.classList.add('active')
      document.querySelectorAll('.catalog__content').forEach(c => {
        c.classList.remove('active')
      });
      document.querySelector(btn.getAttribute('data-target')).classList.add('active');
    })
  })
}