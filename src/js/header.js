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
  modalBurger: document.querySelector('.burger-lnk'),
  modalMenu: document.querySelector('.modal-menu'),
  modalClose: document.querySelector('.modal-close-lnk'),
  closeElements: document.querySelectorAll(
    '.nav-item, .order-project-btn-modal'
  ),
};

refs.modalBurger.addEventListener('click', event => {
  event.preventDefault();
  refs.modalMenu.classList.add('is-open');
  document.body.classList.add('no-scroll');
});

refs.modalClose.addEventListener('click', () => {
  refs.modalMenu.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
});

refs.closeElements.forEach(el => {
  el.addEventListener('click', () => {
    refs.modalMenu.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  });
});
