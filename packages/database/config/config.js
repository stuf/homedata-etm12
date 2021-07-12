const fs = require('fs');

module.exports = {
  development: {
    username: process.env.DEV_DB_USERNAME,
    password: process.env.DEV_DB_PASSWORD,
    database: process.env.DEV_DB_DATABASE,
    host: '127.0.0.1',
    dialect: 'postgres',
    protocol: 'postgres',
    migrationStorage: 'json',
  },
  test: {
    username: 'postgres',
    password: null,
    database: 'node_test',
    host: '127.0.0.1',
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  production: {
    username: 'postgres',
    password: null,
    database: 'node_test',
    host: '127.0.0.1',
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
