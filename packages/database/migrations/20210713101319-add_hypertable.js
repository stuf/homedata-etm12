'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(
      "SELECT create_hypertable('measurements', 'time');",
    );
  },

  down: (queryInterface, Sequelize) => {},
};
