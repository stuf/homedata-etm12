const config = require('@etm12/config');

module.exports = {
  development: {
    username: config.db.username || process.env.DEV_DB_USERNAME,
    password: config.db.password || process.env.DEV_DB_PASSWORD,
    database: config.db.database || process.env.DEV_DB_DATABASE,
    host: config.db.host || '127.0.0.1',
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
