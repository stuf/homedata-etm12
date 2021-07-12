'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date();
    return await queryInterface.bulkInsert('sources', [
      {
        type: 'ruuvitag',
        mac: '12:23:34:45:56:67',
        name: 'Kitchen (A)',
        createdAt: now,
        updatedAt: now,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('sources', null, {});
  },
};
