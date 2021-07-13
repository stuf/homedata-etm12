const { authenticate, client } = require('../lib/database');

authenticate()
  .then(() => console.log('yes'))
  .catch(err => console.log('no', err));
