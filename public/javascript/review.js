const newReview = async (event) => {
  event.preventDefault();

  const score = document.querySelector('#score-select').value;
  const text = $('#review-text').val().trim();
  const user_id = event.target.id;
  const reviewee_id = event.target.value;

  console.log(user_id);
  console.log('*************');
  console.log(reviewee_id);
  try {
    if (score && text && user_id && reviewee_id) {
      const response = await fetch('/api/review', {
        method: 'POST',
        body: JSON.stringify({
          score,
          text,
          user_id,
          reviewee_id,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/listings');
      } else {
        alert('Failed to post activity.');
      }
    }
  } catch (error) {
    console.log(error);
  }
};

document.querySelector('.form-submit').addEventListener('click', newReview);
