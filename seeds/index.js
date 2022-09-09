const seedReview = require('./review-seed');
const seedCategories = require('./category-seed');
const seedUser = require('./user-seed');
const seedListing = require('./listing-seed');

const { sequelize } = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUser();
  console.log('\n----- USER SEEDED -----\n');

  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedListing();
  console.log('\n----- LISTING SEEDED -----\n');

  await seedReview();
  console.log('\n----- REVIEWS SEEDED -----\n');

  process.exit(0);
};

seedAll();
