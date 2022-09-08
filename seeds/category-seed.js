const { Category } = require('../models');

const categoryData = [
  {
    name: 'Bowling',
  },
  {
    name: 'Sea of Theives',
  },
  {
    name: 'Watching Sports',
  },
  {
    name: 'Hiking',
  },
  {
    name: 'Shoes Shopping',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
