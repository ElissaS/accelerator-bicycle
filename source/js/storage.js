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
