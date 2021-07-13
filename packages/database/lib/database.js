const config = require('@etm12/config');
const { Sequelize } = require('sequelize');

// const { PASSWORD } = process.env;
const password = config.db.password || process.env.PASSWORD;
const username = config.db.username || process.env.USERNAME;
const database = config.db.database || process.env.DATABASE;
const host = config.db.host || process.env.HOST || 'localhost';

const client = new Sequelize({
  host,
  username,
  password,
  database,
  dialect: 'postgres',
  protocol: 'postgres',
});

const authenticate = () =>
  client
    .authenticate()
    .then(() => {
      console.log('authenticated');
    })
    .catch(err => {
      throw err;
    });

module.exports = { client, authenticate };
