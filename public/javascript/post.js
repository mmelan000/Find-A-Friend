const newActivity = async (event) => {
  event.preventDefault();

  const title = $('#typeTitle').val().trim();
  const selectedCategory = document.querySelector('#category-select').value;
  const createdCategory = $('#typeCategoryCreate').val().trim();
  const text = $('#activity-description').val().trim();
  const age_range = $('#typeAgeRange').val().trim();
  const availabilty = document.querySelector('#availability-select').value;
  const user_id = event.target.id;

  let category_id = selectedCategory;

  if (createdCategory != '' && selectedCategory != '') {
    //Use selected category
    category_id = selectedCategory;
  }
  if (createdCategory != '' && selectedCategory == '') {
    //add a check to see if available for category
    category_id = createdCategory;
  }
  //   if (selectedCategory == '') {
  //     //this is general id
  //     category_id = 6;
  //   }
  try {
    if (title && text && age_range) {
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
