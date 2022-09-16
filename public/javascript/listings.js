const searchingListings = async (event) => {
  event.preventDefault();

  console.log(event);
};

document
  .querySelector('#listing-search')
  .addEventListener('click', searchingListings);
