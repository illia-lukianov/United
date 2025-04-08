import Swiper from 'swiper';
import 'swiper/css';

import { Navigation, Keyboard } from 'swiper/modules';

const swiper = new Swiper('.projects-swiper-container', {
  modules: [Navigation, Keyboard],
  speed: 400,
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: '.projects-next-btn',
    prevEl: '.projects-prev-btn',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

function updateNavigationButtons() {
  const prevButton = document.querySelector('.projects-prev-btn');
  const nextButton = document.querySelector('.projects-next-btn');

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
