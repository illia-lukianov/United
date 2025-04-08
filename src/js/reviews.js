import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getReviews } from './reviews-api';

const reviewsRefs = {
  list: document.querySelector('.reviews-list'),
  swiperContainer: document.querySelector('.reviews-swiper'),
};
let reviewsImagesIsLoaded = true;
let reviewsHasBeenSeen = false;

window.addEventListener('scroll', reviewsErrorCheck);

function renderReview({ avatar_url, author, review }) {
  return `<li class="reviews-item swiper-slide">
              <div class="swiper-slide-transform">
                <img class="reviews-item-img" src="${avatar_url}" alt="${author} photo" width="48" height="48" loading="lazy" />
                <h3 class="reviews-item-title">${author}</h3>
                <p class="reviews-item-text">
                  ${review}
                </p>
              </div>
          </li>`;
}
function renderReviews(reviewsArr) {
  return reviewsArr.map(renderReview).join('');
}

function renderErrorText() {
  const itemError = document.createElement('li');
  const span = document.createElement('span');
  itemError.classList.add('reviews-item-error');
  span.textContent = 'Not found';
  span.classList.add('reviews-text-error');
  itemError.appendChild(span);
  reviewsRefs.list.appendChild(itemError);
}

document.addEventListener('DOMContentLoaded', handleReviews);

async function handleReviews() {
  try {
    const review = await getReviews();
    const markup = renderReviews(review);
    reviewsRefs.list.insertAdjacentHTML('beforeend', markup);
    reviewsImagesIsLoaded = true;
  } catch (error) {
    renderErrorText();
    reviewsImagesIsLoaded = false;
  }
}

function reviewsErrorCheck() {
  if (!reviewsImagesIsLoaded && !reviewsHasBeenSeen) {
    const { top, bottom } = reviewsRefs.swiperContainer.getBoundingClientRect();
    const { innerHeight } = window;
    if (
      (top > 0 && (top < innerHeight || bottom <= 0)) ||
      (bottom > 0 && (bottom < innerHeight || top <= 0))
    ) {
      reviewsHasBeenSeen = true;

      iziToast.error({
        class: 'work-message error',
        title: 'Error',
        theme: 'dark',
        message: 'Failed to load images.',
        position: 'topCenter',
        timeout: 6000,
      });
    }
  }
}

const swiper = new Swiper(reviewsRefs.swiperContainer, {
  modules: [Navigation, Keyboard],
  direction: 'horizontal',
  slidesPerView: 1,
  speed: 400,
  spaceBetween: 16,
  navigation: {
    nextEl: '.reviews-next-btn',
    prevEl: '.reviews-prev-btn',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },

    1440: {
      slidesPerView: 4,
    },
  },
});
