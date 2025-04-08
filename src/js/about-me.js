import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  const accordion = new Accordion('.about-me-accordion-wrapper', {
    elementClass: 'acc',
    triggerClass: 'acc-btn',
    panelClass: 'acc-content',
    duration: 300,
    showMultiple: true,
  });

  accordion.open(0);
});

const swiper = new Swiper('.about-me-swiper', {
  modules: [Navigation, Keyboard],
  direction: 'horizontal',
  slidesPerView: 2,
  loop: true,
  loopedSlides: 9,
  speed: 400,
  navigation: {
    nextEl: '.swiper-button-next',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
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

window.addEventListener('resize', () => {
  swiper.update();
});
