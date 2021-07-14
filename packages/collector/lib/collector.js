const ruuvi = require('node-ruuvitag');
const { client } = require('./client');

/**
 * @param {RuuviTag} tag
 */
function onFound(tag) {
  console.log('tag discovered %s', tag.address);
  tag.on('updated', onUpdated);
}

/**
 *
 * @param {RuuviData} data
 */
function onUpdated(data) {
  const time = new Date();
  const createdAt = time;
  const updatedAt = time;

  const {
    rssi,
    battery,
    temperature,
    humidity,
    pressure,
    accelerationX,
    accelerationY,
    accelerationZ,
  } = data;

  const o = {
    time: time.toISOString(),
    source: data.mac,
    sequenceNumber: data.measurementSequenceNumber,
    rssi,
    tsPower: data.txPower,
    battery,
    temperature,
    humidity,
    pressure,
    accelerationX,
    accelerationY,
    accelerationZ,
    createdAt,
    updatedAt,
  };

  client
    .post('/measurements', o)
    .then(() =>
      console.log('%s: wrote datapoint from %s', new Date(), data.mac),
    )
    .catch(console.error);
}

console.log('waiting for tag discovery');
ruuvi.on('found', onFound);

//

/**
 * @typedef {object} RuuviTag
 * @prop {string} id
 * @prop {string} address
 * @prop {string} addressType
 * @prop {boolean} connectable
 */

/**
 * @typedef {object} RuuviData
 * @prop {string} url
 * @prop {number} temperature
 * @prop {number} pressure
 * @prop {number} humidity
 * @prop {any} eddystoneId
 * @prop {string} rssi
 * @prop {number} battery
 * @prop {number} accelerationX
 * @prop {number} accelerationY
 * @prop {number} accelerationZ
 * @prop {any} txPower
 * @prop {any} movementCounter
 * @prop {any} measurementSequenceNumber
 * @prop {string} mac
 */
