const { Sequelize } = require('sequelize');

const { PASSWORD } = process.env;

const client = new Sequelize({
  host: 'localhost',
  username: 'postgres',
  password: PASSWORD,
  database: 'node_test',
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
