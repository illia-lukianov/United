import axios from 'axios';

// ==================== / postComment function / ====================

export async function postComment(email, comment) {
  const params = {
    email,
    comment,
  };

  try {
    const res = await axios.post(
      'https://portfolio-js.b.goit.study/api/requests',
      params
    );
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

// ==================== / getReviews function / ====================

export async function getReviews() {
  try {
    const res = await axios.get(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    return res.data;
  } catch (err) {
    return err;
  }
}
// ==================== / getReviews example / ====================

// import iziToast from 'izitoast';
// import { getReviews } from './api';

// async function dataProces() {
//   try {
//     const response = await getReviews();
//     if (response.length === 0) {
//       iziToast.info({
//         message: 'Sorry, there are no reviews here(',
//         position: 'topRight',
//       });
//     }
//     console.log(response);
//   } catch (error) {
//     iziToast.info({
//       message: `${error} Sorry, there are no reviews here(`,
//       position: 'topRight',
//     });
//   }
// }

// dataProces();
