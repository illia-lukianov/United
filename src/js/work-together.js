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
}

function closeModal() {
  workRefs.modal.classList.add('hidden');
  document.body.style.overflow = '';
}

function showError(message) {
  iziToast.error({
    title: 'Error',
    message,
    position: 'topCenter',
    timeout: 4000,
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
    showError('Failed to send the form. Please check your input.');
  }
});

workRefs.closeBtn.addEventListener('click', closeModal);

workRefs.modal.addEventListener('click', event => {
  if (event.target === modal) closeModal();
});

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeModal();
});
