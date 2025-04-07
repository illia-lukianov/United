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

function updateNavigationButtons() {
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  if (swiper.isBeginning) {
    prevButton.disabled = true;
    prevButton.classList.add('disabled');
  } else {
    prevButton.disabled = false;
    prevButton.classList.remove('disabled');
  }

  if (swiper.isEnd) {
    nextButton.disabled = true;
    nextButton.classList.add('disabled');
  } else {
    nextButton.disabled = false;
    nextButton.classList.remove('disabled');
  }
}

swiper.on('slideChange', updateNavigationButtons);

updateNavigationButtons();
