'use strict';
const pageHeader = document.querySelector('.page-header');
const headerToggle = document.querySelector('.page-header__toggle');

pageHeader.classList.remove('page-header--nojs');

headerToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('page-header--closed')) {
    pageHeader.classList.remove('page-header--closed');
    pageHeader.classList.add('page-header--opened');

  } else {
    pageHeader.classList.add('page-header--closed');
    pageHeader.classList.remove('page-header--opened');
  }
});


const formButton = document.querySelector('.form__button');
const nameInput = document.querySelector('.form__input--name');
const phoneInput = document.querySelector('.form__input--phone');
const isStorageSupport = true;
const storage = "";


const onButtonHandler = function() {
  if (isStorageSupport) {
    localStorage.setItem('userName', nameInput.value);
    localStorage.setItem('userPhone', phoneInput.value);
  }
};

try {
  storageName = localStorage.getItem("form__input--name");
  storagePhone = localStorage.getItem("form__input--phone");
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
