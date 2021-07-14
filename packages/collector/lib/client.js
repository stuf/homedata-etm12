const A = require('axios').default;

const baseURL = process.env.ETM12_API_ENDPOINT;

const client = A.create({
  baseURL,
});

module.exports = { client };
