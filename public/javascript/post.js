const newActivity = async (event) => {
  event.preventDefault();

  const title = $('#typeTitle').val().trim();
  const category_id = document.querySelector('#category-select').value;
  const text = $('#activity-description').val().trim();
  const age_range = $('#typeAgeRange').val().trim();
  const availabilty = document.querySelector('#availability-select').value;
  const user_id = event.target.id;

  try {
    if (title && text && age_range && category_id) {
      const response = await fetch('/api/listing', {
        method: 'POST',
        body: JSON.stringify({
          title,
          category_id,
          text,
          age_range,
          user_id,
          availabilty,
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

document.querySelector('.post-form').addEventListener('click', newActivity);
