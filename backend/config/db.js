// backend/config/db.js

const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,     // database name
  process.env.DB_USER,     // database username
  process.env.DB_PASSWORD, // database password
  {
    host: process.env.DB_HOST,  // database host
    dialect: 'mysql',           // using MySQL
  }
);

module.exports = sequelize;
