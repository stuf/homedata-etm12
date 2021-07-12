'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sources extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  sources.init({
    type: DataTypes.STRING,
    mac: DataTypes.MACADDR,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'sources',
  });
  return sources;
};