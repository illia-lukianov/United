// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

// Ініціалізація Swiper
const swiper = new Swiper('.swiper-container', {
  loop: true, // Зациклювання слайдів
  slidesPerView: 1, // Один слайд одночасно
  spaceBetween: 0, // Відстань між слайдами

  // Налаштування для кнопок навігації
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },

  // Налаштування спостереження за змінами
  observer: true,
  observeParents: true,

  // Слухаємо подію зміни слайда
  on: {
    slideChange: function () {
      console.log('Slide changed');
    },
  },
});
