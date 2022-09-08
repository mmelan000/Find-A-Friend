const { User } = require('../models');

const userData = [
  {
    username: 'ShowManSam',
    email: 'Samuel@email.com',
    first_name: 'Samuel',
    last_name: 'Smith',
    age: 28,
    language: 'English',
    city: 'Boston',
    state: 'Massachusetts',
    country: 'United states',
    password: 'SportzRule',
  },
  {
    username: 'BookWormBrooke',
    email: 'Brooke@email.com',
    first_name: 'Brooke',
    last_name: 'Bestow',
    age: 47,
    language: 'English',
    city: 'Los Angeles',
    state: 'California',
    country: 'United states',
    password: 'WordsOnPages',
  },
  {
    username: 'BobTheBowler',
    email: 'Bob@email.com',
    first_name: 'Robert',
    last_name: 'Pizza',
    age: 34,
    language: 'English',
    city: 'Pittsburgh',
    state: 'Pennsylvania',
    country: 'United states',
    password: 'StikeMan',
  },
  {
    username: 'OutdoorOlivia',
    email: 'Olivia@email.com',
    first_name: 'Olivia',
    last_name: 'Gem',
    age: 22,
    language: 'English',
    city: 'Vancouver',
    state: 'British Columbia',
    country: 'Canada',
    password: 'NatureYeah',
  },
  {
    username: 'MermaidMaddy',
    email: 'Maddy@email.com',
    first_name: 'Maddy',
    last_name: 'Waters',
    age: 30,
    language: 'English',
    city: 'Cancun',
    state: 'Quintana Roo',
    country: 'Mexico',
    password: 'SwimmingWithFishes',
  },
];

const seedUser = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUser;
