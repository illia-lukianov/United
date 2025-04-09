// menu tablet and desktop //
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');

menu.addEventListener('click', event => {
  event.preventDefault();
  nav.classList.toggle('is-open');

  if (nav.classList.contains('is-open')) {
    document.addEventListener('click', closeTabDeskMenu);
    nav.addEventListener('click', closeTabDeskMenu);
  } else {
    document.removeEventListener('click', closeTabDeskMenu);
    nav.removeEventListener('click', closeTabDeskMenu);
  }
});

function closeTabDeskMenu(event) {
  if (!menu.contains(event.target)) {
    nav.classList.remove('is-open');
    document.removeEventListener('click', closeTabDeskMenu);
    nav.removeEventListener('click', closeTabDeskMenu);
  }
}

// modal menu mobile //
const refs = {
  modalBurger: document.querySelector('.burger-btn'),
  modalMenu: document.querySelector('.modal-menu'),
  modalClose: document.querySelector('.modal-close-btn'),
  closeElements: document.querySelectorAll(
    '.nav-item, .order-project-btn-modal'
  ),
};
refs.modalBurger.addEventListener('click', openMobileMenu);

function openMobileMenu(event) {
  event.preventDefault();
  refs.modalMenu.classList.add('is-open');
  document.body.classList.add('no-scroll');
  refs.closeElements.forEach(el => {
    el.addEventListener('click', closeMobileMenu);
  });
  refs.modalClose.addEventListener('click', closeMobileMenu);
  refs.modalBurger.removeEventListener('click', openMobileMenu);
}

function closeMobileMenu() {
  refs.modalMenu.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
  refs.closeElements.forEach(el => {
    el.removeEventListener('click', closeMobileMenu);
  });
  refs.modalClose.removeEventListener('click', closeMobileMenu);
  refs.modalBurger.addEventListener('click', openMobileMenu);
}

const themeRefs = {
  themeToggle: document.querySelector('.themes-toggle'),
  themesMenu: document.querySelector('.overlay-themes-menu'),
  themesOptions: [...document.querySelectorAll('.themes-option')],
  heroSection: document.querySelector('.hero-section'),
};

const THEME_KEY = 'theme-color';

document.addEventListener('DOMContentLoaded', setTheme);
themeRefs.themeToggle.addEventListener('click', () => {
  themeRefs.themesMenu.classList.toggle('is-active');
  if (themeRefs.themesMenu.classList.contains('is-active')) {
    themeRefs.themesMenu.addEventListener('click', changeTheme);
    themeRefs.heroSection.addEventListener('click', closeThemeMenu);
    window.addEventListener('keydown', closeThemeMenu);
  } else {
    themeRefs.themesMenu.removeEventListener('click', changeTheme);
    themeRefs.heroSection.removeEventListener('click', closeThemeMenu);
    window.removeEventListener('keydown', closeThemeMenu);
  }
});
function closeThemeMenu(event) {
  if (event.key === 'Escape' || event.currentTarget === themeRefs.heroSection) {
    themeRefs.themesMenu.classList.remove('is-active');
  }
}
function setTheme() {
  const themeColor =
    localStorage.getItem(THEME_KEY) ?? themeRefs.themesOptions[1].dataset.theme;
  document.documentElement.dataset.theme = themeColor;
  themeRefs.themesOptions
    .find(option => option.dataset.theme === themeColor)
    .classList.add('is-active');
}

function changeTheme(event) {
  if (themeRefs.themesOptions.includes(event.target)) {
    themeRefs.themesOptions.forEach(option => {
      option.classList.remove('is-active');
    });
    localStorage.setItem(THEME_KEY, event.target.dataset.theme);
    event.target.classList.add('is-active');
    document.documentElement.dataset.theme = event.target.dataset.theme;
  }
}
