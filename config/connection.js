require('dotenv').config();

const Sequelize = require('sequelize');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: 'localhost',
        dialect: 'mysql',
        dialectOptions: {
          decimalNumbers: true,
        },
      }
    );

module.exports = sequelize;
