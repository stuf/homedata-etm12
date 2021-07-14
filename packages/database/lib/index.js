const { authenticate, client } = require('./database');
const models = require('./models');

module.exports = {
  authenticate,
  client,

  models,
};
