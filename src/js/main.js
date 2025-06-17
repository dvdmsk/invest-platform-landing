const dropdown = document.querySelector('.lang');
const dropdownBtn = dropdown.querySelector('.lang__dropdown');
const langList = document.querySelector('.lang__list');
const lang = document.querySelector('.lang__btn span');
const menu = document.querySelector('.top-bar__btn-menu');
const langMenu = document.querySelector('.header__lang');
const sign = document.querySelector('.header__sign');
const aside = document.getElementById('menu');

document.addEventListener('click', (e) => {
  const target = e.target;

  if (!target || !target.closest('.lang')) {
    dropdownBtn.classList.remove('lang__dropdown--open');
    langList.classList.remove('lang__list--open');
  } else {
    if (target.closest('.lang li')) {
      lang.textContent = target.textContent;

      dropdownBtn.classList.remove('lang__dropdown--open');
      langList.classList.remove('lang__list--open');

      [...document.querySelectorAll('.lang__list li')].forEach((li) =>
        li.classList.remove('active')
      );
      
      target.classList.add('active');
      return;
    }

    dropdownBtn.classList.toggle('lang__dropdown--open');
    langList.classList.toggle('lang__list--open');
  }
});

menu.onclick = (e) => {
  e.preventDefault();
  if (menu.classList.contains('top-bar__btn-menu--close')) {
    closeMenu();
  } else {
    openMenu();
  }
};

aside.onclick = (e) => {
  const a = e.target.closest('a');

  if (a) {
    menu.classList.remove('top-bar__btn-menu--close');
    menu.setAttribute('href', '#menu');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const currentHash = window.location.hash;

  if (currentHash === '#menu') {
    openMenu();
  }

  [...document.querySelectorAll('.lang__list li')].forEach((li) => {
    li.classList.remove('active');

    if(lang.textContent === li.textContent) {
      li.classList.add('active');
    }
  });
});

function openMenu() {
  menu.classList.add('top-bar__btn-menu--close');
  langMenu.classList.add('header__lang--open');
  sign.classList.add('header__sign--close');
  menu.setAttribute('href', '#');
  window.location.hash = '#menu';
}

function closeMenu() {
  menu.classList.remove('top-bar__btn-menu--close');
  langMenu.classList.remove('header__lang--open');
  sign.classList.remove('header__sign--close');
  menu.setAttribute('href', '#menu');
  window.location.hash = '#';
}


