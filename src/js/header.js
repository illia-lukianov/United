// menu tablet and desktop //
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');

menu.addEventListener('click', () => {
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
const modalBurger = document.querySelector('.burger-svg');
const modalMenu = document.querySelector('.modal-menu');
const modalClose = document.querySelector('.modal-close-svg');
const closeElements = document.querySelectorAll(
  '.nav-item, .order-project-btn-modal'
);

modalBurger.addEventListener('touchstart', () => {
  modalMenu.classList.add('is-open');
  document.body.style.overflow = 'hidden';
});

function closeMenu() {
  modalMenu.classList.remove('is-open');
  document.body.style.overflow = '';
}

closeElements.forEach(element => {
  element.addEventListener('touchstart', () => {
    setTimeout(() => {
      closeMenu();
    }, 300);
  });
});

modalClose.addEventListener('touchstart', closeMenu);
