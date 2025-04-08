import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const workRefs = {
  form: document.getElementById('cooperationForm'),
  modal: document.getElementById('work-modalBackdrop'),
  closeBtn: document.querySelector('.work-modal-close-btn'),
};

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

workRefs.form.addEventListener('submit', async event => {
  event.preventDefault();

  if (!workRefs.form.checkValidity()) {
    workRefs.form.reportValidity();
    return;
  }

  const formData = new FormData(workRefs.form);
  const data = Object.fromEntries(formData.entries());

  try {
    await axios.post('https://jsonplaceholder.typicode.com/posts', data);

    workRefs.form.reset();
    openModal();
  } catch (error) {
    showError(`Failed to send the form. Please check your input.`);
  }
});
