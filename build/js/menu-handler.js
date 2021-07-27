'use strict';
const pageHeader = document.querySelector('.page-header');
const headerToggle = document.querySelector('.page-header__toggle');
const body = document.querySelector('.page-body');
const menuLinks = document.querySelectorAll('.main-nav__link');
const requiredInputs = document.querySelectorAll('input[required]');


pageHeader.classList.remove('page-header--nojs');

const openMenu = function () {
  pageHeader.classList.remove('page-header--closed');
  pageHeader.classList.add('page-header--opened');
  body.classList.add('page-body--menu-opened');
}

const closeMenu = function () {
  body.classList.remove('page-body--menu-opened');
  pageHeader.classList.add('page-header--closed');
  pageHeader.classList.remove('page-header--opened');
}

headerToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('page-header--closed')) {
    openMenu();
  } else {
    closeMenu();
  }
});

for (let i = 0; i < menuLinks.length; i++) {
  console.log(menuLinks[i]);
  menuLinks[i].addEventListener('click', function () {
    closeMenu();
  });
}

// for (let i = 0; i < requiredInputs.length; i++) {
//   console.log(requiredInputs[i]);
//   requiredInputs[i].addEventListener('invalid', function () {
//     if (!requiredInputs[i].value) {
//       requiredInputs[i].setCustomValidity('Заполните поле бл.');
//     } else {
//       console.log('aaa');
//       requiredInputs[i].setCustomValidity('Заполните поле бл.');
//     }
//   });
// }
// oninvalid="setCustomValidity('Custom Message')
