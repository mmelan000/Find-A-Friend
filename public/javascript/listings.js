const searchingListings = async (event) => {
  event.preventDefault();

  const day = document.querySelector('#category-select').value;
  const category = document.querySelector('#availability-select').value;

  window.location.replace(`/listings?day=${day}&category=${category}`);
};

document
  .querySelector('#listing-submit')
  .addEventListener('click', searchingListings);

//access it through event.target.value
