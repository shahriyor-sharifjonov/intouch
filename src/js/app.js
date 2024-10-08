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
  loop: false,
});

var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  loop: false,
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

const openPopup = document.querySelectorAll('.popup-open');
const closes = document.querySelectorAll('.popup-close');
const popups = document.querySelectorAll('.popup');

closes.forEach(btn => {
  btn.addEventListener('click', () => {
    popups.forEach(popup => {
      popup.classList.remove('active');

      // Pause the video when the popup closes
      const video = document.querySelector('#missionvideo');
      if (video) {
        video.pause();
        video.currentTime = 0; // Optional: reset video to the start
      }
    });
  });
});

openPopup.forEach(btn => { 
  btn.addEventListener('click', () => {
    popups.forEach(popup => {
      popup.classList.remove('active')
    })
    document.querySelector(btn.getAttribute('data-target')).classList.add('active');
    if(btn.getAttribute('data-target') === "#video") {
      const video = document.querySelector('#missionvideo');
      if (video) {
        video.play();
      }
    }
  })
})