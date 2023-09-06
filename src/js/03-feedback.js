import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';

const formData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInputChange, 500));

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
}

function onInputChange() {
  formData.email = input.value;
  formData.message = textarea.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

populateInput();

function populateInput() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedData) {
    input.value = savedData.email;
    textarea.value = savedData.message;
  }
}
