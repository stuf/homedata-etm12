'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class measurements extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  measurements.init(
    {
      timestamp: DataTypes.DATE,
      source: DataTypes.MACADDR,
      sequenceNumber: DataTypes.INTEGER,
      rssi: DataTypes.FLOAT,
      tsPower: DataTypes.INTEGER,
      battery: DataTypes.FLOAT,
      temperature: DataTypes.FLOAT,
      humidity: DataTypes.FLOAT,
      pressure: DataTypes.FLOAT,
      battery: DataTypes.FLOAT,
      accelerationX: DataTypes.FLOAT,
      accelerationY: DataTypes.FLOAT,
      accelerationZ: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: 'measurements',
    },
  );
  return measurements;
};
