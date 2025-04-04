import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper';
import 'swiper/css';

document.addEventListener('DOMContentLoaded', () => {
  new Accordion('.about-me-accordion-wrapper', {
    elementClass: 'acc',
    triggerClass: 'acc-btn',
    panelClass: 'acc-content',
    duration: 300,
    showMultiple: true,
  });
});

const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  loop: true,
  loopedSlides: 9,
  speed: 400,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
});
console.log(`Скрипт працює!`);
