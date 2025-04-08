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
  modalBurger: document.querySelector('.burger-btn'),
  modalMenu: document.querySelector('.modal-menu'),
  modalClose: document.querySelector('.modal-close-btn'),
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

const themeToggle = document.querySelector(".themes-toggle");
const themesMenu = document.querySelector(".overlay-themes-menu");
const themesOptions = [...document.querySelectorAll(".themes-option")];
const THEME_KEY = "theme-color";


document.addEventListener("DOMContentLoaded", setTheme)
themeToggle.addEventListener('click', () => {
    themesMenu.classList.toggle('is-active');
})

themesMenu.addEventListener('click', (event) => {
  themesOptions.forEach((option) => {
    option.classList.remove('is-active');
  });
  localStorage.setItem(THEME_KEY, event.target.dataset.theme);
  event.target.classList.add('is-active');
  document.documentElement.dataset.theme = event.target.dataset.theme; 
})

function setTheme() {
  const themeColor = localStorage.getItem(THEME_KEY) ?? themesOptions[1].dataset.theme;
  document.documentElement.dataset.theme = themeColor;
  themesOptions.find((option) => option.dataset.theme === themeColor).classList.add('is-active');
}