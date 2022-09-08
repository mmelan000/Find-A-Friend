const { Review } = require('../models');

const reviewData = [
  {
    text: 'Great time and but shy',
    score: 4,
    user_id: 3,
    reviewee_id: 4,
  },
  {
    text: 'Could have been better',
    score: 3,
    user_id: 2,
    reviewee_id: 1,
  },
  {
    text: 'Absolute blast great person',
    score: 5,
    user_id: 4,
    reviewee_id: 2,
  },
  {
    text: 'Horrible human',
    score: 1,
    user_id: 1,
    reviewee_id: 5,
  },
  {
    text: 'Would definitly do it again',
    score: 4,
    user_id: 5,
    reviewee_id: 3,
  },
];

const seedReview = () => Review.bulkCreate(reviewData);

module.exports = seedReview;
