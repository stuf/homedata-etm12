const { Model, DataTypes: DT } = require('sequelize');
const { client } = require('./database');

const out = {};

//

class Source extends Model {}
Source.init(
  {
    type: DT.STRING,
    mac: DT.MACADDR,
    name: DT.STRING,
  },
  { sequelize: client, tableName: 'sources' },
);

out.Source = Source;

//

class Measurement extends Model {}
Measurement.init(
  {
    time: DT.DATE,
    source: DT.MACADDR,
    sequenceNumber: DT.INTEGER,
    rssi: DT.FLOAT,
    tsPower: DT.INTEGER,
    battery: DT.FLOAT,
    temperature: DT.FLOAT,
    humidity: DT.FLOAT,
    pressure: DT.FLOAT,
    battery: DT.FLOAT,
    accelerationX: DT.FLOAT,
    accelerationY: DT.FLOAT,
    accelerationZ: DT.FLOAT,
  },
  { sequelize: client, tableName: 'measurements' },
);

out.Measurement = Measurement;

//

module.exports = out;
