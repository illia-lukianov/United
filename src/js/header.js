const modalBurger = document.querySelector('.burger-svg');
const modalMenu = document.querySelector('.modal-menu');
const modalClose = document.querySelector('.modal-close-svg');

modalBurger.addEventListener('touchstart', () => {
  modalMenu.classList.add('is-open');
  document.body.style.overflow = 'hidden';
});

modalClose.addEventListener('touchstart', () => {
  modalMenu.classList.remove('is-open');
});
