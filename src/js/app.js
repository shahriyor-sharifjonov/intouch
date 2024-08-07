import * as functions from "./modules/functions.js";

functions.isWebp();

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

import Swiper, { Navigation, Pagination, FreeMode, Autoplay, Thumbs } from 'swiper';

import SmoothScroll from "smoothscroll-for-websites";

SmoothScroll({
  animationTime: 600,
  stepSize: 60,
  keyboardSupport: true,
  arrowScroll: 100,
  touchpadSupport: true,
});

const headerButton = document.querySelector(".header__button")
const headerMenu = document.querySelector(".header__menu")
const headerLinks = document.querySelectorAll('.close')

let menuOpened = false
const menuToggle = () => {
  menuOpened = !menuOpened
  headerButton.classList.toggle("open")
  headerMenu.classList.toggle("open")
}

headerButton.onclick = menuToggle

window.onclick = (e) => {
  if (
    menuOpened &&
    !e.composedPath().includes(headerButton) &&
    !e.composedPath().includes(headerMenu)
  )
    menuToggle()
}

headerLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuToggle()
  })
})

document.querySelectorAll('.open-popup').forEach(button => {
  button.addEventListener('click', function() {
    const popups = document.querySelectorAll('.popup.active');
    popups.forEach(popup => {
        popup.classList.remove('active');
    });
    const targetId = button.getAttribute('data-target');
    const popup = document.getElementById(targetId);
    if (popup) {
      popup.classList.add('active');
    }
  });
});

document.querySelectorAll('.close-popup').forEach(button => {
  button.addEventListener('click', function() {
      const popups = document.querySelectorAll('.popup.active');
      popups.forEach(popup => {
          popup.classList.remove('active');
      });
  });
});

var swiper = new Swiper(".popup__product-thumbs", {
  spaceBetween: 10,
  slidesPerView: 3,
  modules: [FreeMode],
  freeMode: true,
  watchSlidesProgress: true,
})

var swiper2 = new Swiper(".popup__product-swiper", {
  spaceBetween: 10,
  slidesPerView: 1,
  modules: [Thumbs],
  thumbs: {
    swiper: swiper,
  },
})

if(document.querySelector('.popular__swiper')){
  new Swiper(".popular__swiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    modules: [FreeMode, Navigation],
    loop: true,
    freeMode: true,
    navigation: {
      nextEl: ".popular__next",
      prevEl: ".popular__prev"
    },
    breakpoints: {
      480: {
        spaceBetween: 30,
      }
    }
  });
}

if(document.querySelector('.partners__swiper')){
  new Swiper(".partners__swiper", {
    modules: [Autoplay],
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 1000,
    },
    breakpoints: {
      370: {
        slidesPerView: 4,
      },
      576: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 7,
        spaceBetween: 40,
      }
    }
  });
}

if(document.querySelector('.reviews__swiper')){
  new Swiper(".reviews__swiper", {
    modules: [Autoplay, Pagination],
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: { 
      el: ".reviews__pagination",
      clickable: true
    },
    autoplay: {
      delay: 5000,
    },
  });
}

ScrollTrigger.matchMedia({
  "all": function() {
    gsap.utils.toArray(".platform__item").forEach(slider => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: slider,
          start: "top bottom",
          end: "bottom top",
          markers: false,  // Enable this for debugging
          scrub: false,
        }
      });
    
      tl.add('start')
        .fromTo(slider,
          {
            y: 50,
            opacity: 0,
          },
          { 
            y: 0,
            opacity: 1,
          },
          'start'
        );
    });

    gsap.utils.toArray(".form__content").forEach(slider => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: slider,
          start: "top bottom",
          end: "bottom top",
          markers: false,  // Enable this for debugging
          scrub: false,
        }
      });
    
      tl.add('start')
        .fromTo(slider,
          {
            y: 150,
            opacity: 0,
          },
          { 
            y: 0,
            opacity: 1,
          },
          'start'
        );
    });
  },
  "(min-width: 576px)": function() {
    gsap.utils.toArray(".popular__slider").forEach(slider => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: slider,
          start: "top bottom",
          end: "bottom top",
          markers: false,  // Enable this for debugging
          scrub: 1,
        }
      });
    
      tl.add('start')
        .fromTo(slider,
          {
            x: 0,
          },
          { 
            x: -150 
          },
          'start'
        );
    });
  },
  "(max-width: 576px)": function() {
    gsap.utils.toArray(".popular__slider").forEach(slider => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: slider,
          start: "top bottom",
          end: "bottom top",
          markers: false,  // Enable this for debugging
          scrub: 1,
        }
      });
    
      tl.add('start')
        .fromTo(slider,
          {
            x: 0,
          },
          { 
            x: -330 
          },
          'start'
        );
    });
  },
})

if(document.querySelector('.overlay')){
  const overlay = document.querySelector('.overlay');
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
  
      if (!href.startsWith('tel:') && !href.startsWith('mailto:')) {
        e.preventDefault();
        overlay.classList.remove('hide');
        setTimeout(() => {
          window.location.href = href;
          setTimeout(() => {
            overlay.classList.add('hide')
          }, 300)
        }, 300);
      }
    });
  });
  setTimeout(() => {
    overlay.classList.add('hide')
  }, 300)
}

if(document.getElementById("videoPlayer")){
  const video = document.getElementById("videoPlayer");
  const playButton = document.getElementById("playButton");
  
  function togglePlay() {
    if (video.paused || video.ended) {
        video.play();
        playButton.style.display = "none";
        video.controls = true;
    } else {
        video.pause();
    }
  }
  
  playButton.addEventListener("click", togglePlay);
  
  video.addEventListener("play", function() {
    video.controls = true;
  });
  
  video.addEventListener("pause", function() {
    playButton.style.display = "block";
    video.controls = false;
  });
}

if(document.querySelector('.product')){
  const buttons = document.querySelectorAll(".products__cat")
  const contents = document.querySelectorAll(".products__content")

  buttons.forEach(button => {
    button.addEventListener("click", function() {
      buttons.forEach(btn => btn.classList.remove("active"))
      this.classList.add("active")

      const target = this.getAttribute("data-target")

      contents.forEach(content => content.classList.remove("active"))
      document.querySelector(`#${target}`).classList.add("active")
    })
  })
}