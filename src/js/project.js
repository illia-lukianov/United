// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

import { Navigation, Keyboard } from 'swiper/modules';

const swiper = new Swiper('.swiper-container', {
  modules: [Navigation, Keyboard],
  loop: true,
  loopedSlides: 3,
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  // observer: true,
  // observeParents: true,
});
