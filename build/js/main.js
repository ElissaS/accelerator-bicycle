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

const formButton = document.querySelector('.form__button');
const nameInput = document.querySelector('.form__input--name');
const phoneInput = document.querySelector('.form__input--phone');
let isStorageSupport = true;
const storage = '';


const onButtonHandler = function() {
  if (isStorageSupport) {
    localStorage.setItem('userName', nameInput.value);
    localStorage.setItem('userPhone', phoneInput.value);
  }
};

try {
  storageName = localStorage.getItem('form__input--name');
  storagePhone = localStorage.getItem('form__input--phone');
} catch (err) {
  isStorageSupport = false;
}

const localStorageNo = function() {
  if (storageName && storagePhone) {
    nameInput.value = storageName;
    phoneInput.value = storagePhone;
  }
};

formButton.addEventListener('click', onButtonHandler);
