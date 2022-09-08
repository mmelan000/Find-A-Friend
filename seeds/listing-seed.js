const { Listing } = require('../models');

const listingData = [
  {
    title: 'Sports',
    text: 'Going to the local bowling ally.',
    availabilty: 'Thursday',
    age_range: '24',
    user_id: 1,
    category_id: 1,
  },
  {
    title: 'Video Games',
    text: 'Need someone to sail the 7 seas with',
    availabilty: 'Friday',
    age_range: '28',
    user_id: 2,
    category_id: 2,
  },
  {
    title: 'Watching Sports',
    text: 'There is a big game this weekend and would you like to watch it with someone?',
    availabilty: 'Sunday',
    age_range: '35',
    user_id: 3,
    category_id: 3,
  },
  {
    title: 'Hiking',
    text: 'Climb some of awesome locations with some great views.',
    availabilty: 'Monday',
    age_range: '48',
    user_id: 4,
    category_id: 4,
  },
  {
    title: 'Shopping',
    text: 'Need some new things',
    availabilty: 'Saturday',
    age_range: '22',
    user_id: 5,
    category_id: 5,
  },
];

const seedListing = () => Listing.bulkCreate(listingData);

module.exports = seedListing;
