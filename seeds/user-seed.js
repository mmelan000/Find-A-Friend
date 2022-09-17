const { User } = require('../models');

const userData = [
  {
    username: 'ShowManSam',
    email: 'Samuel@email.com',
    first_name: 'Samuel',
    last_name: 'Smith',
    age: '1983-01-01',
    language: 'English',
    city: 'Boston',
    state: 'Massachusetts',
    country: 'United states',
    password: 'SportzRule',
    hashed_email: 'Samuel@email.com',
  },
  {
    username: 'BookWormBrooke',
    email: 'Brooke@email.com',
    first_name: 'Brooke',
    last_name: 'Bestow',
    age: '1977-01-01',
    language: 'English',
    city: 'Los Angeles',
    state: 'California',
    country: 'United states',
    password: 'WordsOnPages',
    hashed_email: 'Brooke@email.com',
  },
  {
    username: 'BobTheBowler',
    email: 'Bob@email.com',
    first_name: 'Robert',
    last_name: 'Pizza',
    age: '1989-01-01',
    language: 'English',
    city: 'Pittsburgh',
    state: 'Pennsylvania',
    country: 'United states',
    password: 'StikeMan',
    hashed_email: 'Bob@email.com',
  },
  {
    username: 'OutdoorOlivia',
    email: 'Olivia@email.com',
    first_name: 'Olivia',
    last_name: 'Gem',
    age: '2000-01-01',
    language: 'English',
    city: 'Vancouver',
    state: 'British Columbia',
    country: 'Canada',
    password: 'NatureYeah',
    hashed_email: 'Olivia@email.com',
  },
  {
    username: 'MermaidMaddy',
    email: 'Maddy@email.com',
    first_name: 'Maddy',
    last_name: 'Waters',
    age: '1992-01-01',
    language: 'English',
    city: 'Cancun',
    state: 'Quintana Roo',
    country: 'Mexico',
    password: 'SwimmingWithFishes',
    hashed_email: 'Maddy@email.com',
  },
  {
    username: 'Cloud',
    email: 'm.melanson000@gmail.com',
    first_name: 'Michael',
    last_name: 'Melanson',
    age: '1987-01-01',
    language: 'English',
    city: 'Cancun',
    state: 'Quintana Roo',
    country: 'Mexico',
    password: '1234qwer',
    hashed_email: 'Maddy@email.com',
  },
];

const seedUser = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUser;
