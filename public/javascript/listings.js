const searchingListings = async (event) => {
  event.preventDefault();

  const category = document.querySelector('#category-select').value;
  const day = document.querySelector('#availability-select').value;

  if (day == '' && category == '') {
    window.location.replace(`/listings`);
  }
  if (!day == '' && category == '') {
    window.location.replace(`/listings?day=${day}`);
  }
  if (day == '' && !category == '') {
    window.location.replace(`/listings?category=${category}`);
  } else {
    window.location.replace(`/listings?day=${day}&category=${category}`);
  }
};

const clearSearch = async (event) => {
  event.preventDefault();
  window.location.replace(`/listings`);
};

document
  .querySelector('#listing-submit')
  .addEventListener('click', searchingListings);

document.querySelector('#clear-search').addEventListener('click', clearSearch);
//access it through event.target.value
