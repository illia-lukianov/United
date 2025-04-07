// menu tablet and desktop //
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');

menu.addEventListener('click', event => {
  event.preventDefault();
  nav.classList.toggle('is-open');
});

document.addEventListener('click', event => {
  if (!nav.contains(event.target) && !menu.contains(event.target)) {
    nav.classList.remove('is-open');
  }
});

nav.addEventListener('click', () => {
  nav.classList.remove('is-open');
});

// modal menu mobile //
const refs = {
  modalBurger: document.querySelector('.burger-svg'),
  modalMenu: document.querySelector('.modal-menu'),
  modalClose: document.querySelector('.modal-close-svg'),
  closeElements: document.querySelectorAll(
    '.nav-item, .order-project-btn-modal'
  ),
};

refs.modalBurger.addEventListener('click', () => {
  refs.modalMenu.classList.add('is-open');
});

refs.modalClose.addEventListener('click', () => {
  refs.modalMenu.classList.remove('is-open');
});

refs.closeElements.forEach(el => {
  el.addEventListener('click', () => {
    refs.modalMenu.classList.remove('is-open');
  });
});
