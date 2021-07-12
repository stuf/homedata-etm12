'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('measurements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      timestamp: { type: Sequelize.DATE, allowNull: false },
      source: { type: Sequelize.MACADDR },
      sequenceNumber: { type: Sequelize.INTEGER },
      rssi: { type: Sequelize.FLOAT },
      tsPower: { type: Sequelize.INTEGER },
      battery: { type: Sequelize.FLOAT },
      temperature: { type: Sequelize.FLOAT },
      humidity: { type: Sequelize.FLOAT },
      pressure: { type: Sequelize.FLOAT },
      battery: { type: Sequelize.FLOAT },
      accelerationX: { type: Sequelize.FLOAT },
      accelerationY: { type: Sequelize.FLOAT },
      accelerationZ: { type: Sequelize.FLOAT },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('measurements');
  },
};
