const { Category } = require('../models');

const categoryData = [
  {
    name: 'Playing Sports',
  },
  {
    name: 'Video Games',
  },
  {
    name: 'Watching Sports',
  },
  {
    name: 'Outdoors',
  },
  {
    name: 'Shopping',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
