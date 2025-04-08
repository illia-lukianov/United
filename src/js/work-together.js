import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const workRefs = {
  form: document.getElementById('cooperationForm'),
  modal: document.getElementById('work-modalBackdrop'),
  closeBtn: document.querySelector('.work-modal-close-btn'),
  successMsg: document.querySelector('.success-msg'),
  errorMsg: document.querySelector('.error-msg'),
  emailInput: document.querySelector('[name="emailInput"]'),
};
function validateEmail() {
  const emailRegex = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const isValid = emailRegex.test(workRefs.emailInput.value);

  workRefs.emailInput.classList.remove('valid', 'invalid');

  // Додаємо нові класи в залежності від стану
  if (isValid) {
    workRefs.emailInput.classList.add('valid');
  } else if (workRefs.emailInput.value !== '') {
    workRefs.emailInput.classList.add('invalid');
  }

  // Оновлюємо повідомлення
  workRefs.successMsg.classList.toggle('visible', isValid);
  workRefs.errorMsg.classList.toggle('visible', !isValid);

  return isValid;
}
document.addEventListener('DOMContentLoaded', () => {
  workRefs.emailInput.value = '';
  workRefs.emailInput.classList.remove('valid', 'invalid');
  workRefs.successMsg.classList.remove('visible');
  workRefs.errorMsg.classList.remove('visible');
});
workRefs.emailInput.addEventListener('input', () => {
  if (workRefs.emailInput.value === '') {
    workRefs.emailInput.classList.remove('valid', 'invalid');
    workRefs.successMsg.classList.remove('visible');
    workRefs.errorMsg.classList.remove('visible');
  } else {
    validateEmail();
  }
});
function openModal() {
  workRefs.modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  workRefs.closeBtn.addEventListener('click', closeModal);

  workRefs.modal.addEventListener('click', closeModal);

  window.addEventListener('keydown', closeModal);
}

function closeModal(event) {
  if (
    event.key === 'Escape' ||
    event.target === workRefs.modal ||
    event.currentTarget == workRefs.closeBtn
  ) {
    workRefs.modal.classList.add('hidden');
    document.body.style.overflow = '';
    workRefs.closeBtn.removeEventListener('click', closeModal);
    workRefs.modal.removeEventListener('click', closeModal);
    window.removeEventListener('keydown', closeModal);
  }
}

function showError(message) {
  iziToast.error({
    class: 'work-message error',
    title: 'Error',
    theme: 'dark',
    message,
    position: 'topCenter',
    timeout: 6000,
  });
}

// Модифікований обробник сабміту
workRefs.form.addEventListener('submit', async event => {
  event.preventDefault();

  // Валідація перед відправкою
  const isEmailValid = validateEmail();

  if (!workRefs.form.checkValidity() || !isEmailValid) {
    workRefs.errorMsg.classList.add('visible');
    return;
  }

  const formData = new FormData(workRefs.form);
  const data = Object.fromEntries(formData.entries());

  try {
    await axios.post('https://jsonplaceholder.typicode.com/posts', data);

    // Скидання стану валідації
    workRefs.emailInput.classList.remove('valid', 'invalid');
    workRefs.successMsg.classList.remove('visible');
    workRefs.errorMsg.classList.remove('visible');

    workRefs.form.reset();
    openModal();
  } catch (error) {
    showError(`Failed to send the form. Please check your input.`);
  }
});
