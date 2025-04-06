import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';



const form = document.getElementById('cooperationForm');
const modal = document.getElementById('modalBackdrop');
const closeBtn = document.querySelector('.close-btn');

function openModal() {
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.add('hidden');
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

form.addEventListener('submit', async event => {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    await axios.post('https://jsonplaceholder.typicode.com/posts', data);

    form.reset();
    openModal();
  } catch (error) {
    showError('Failed to send the form. Please check your input.');
  }
});

closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', event => {
  if (event.target === modal) closeModal();
});

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeModal();
});



