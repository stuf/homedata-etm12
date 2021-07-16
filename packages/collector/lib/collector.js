const ruuvi = require('node-ruuvitag');

const { client } = require('./client');
const { log } = require('./logger');

let i = 0;
let ts = { start: new Date(), now: new Date() };

const logEvery = 5;

/**
 * @param {RuuviTag} tag
 */
function onFound(tag) {
  log('info', 'collector', `new tag discovered; id = ${tag.id}`);
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
    .then(() => {
      ++i;
      ts.now = new Date();

      if (i % logEvery === 0) {
        const timeDelta = (ts.now - ts.start) / 1000;
        const avgRate = i / timeDelta;
        log(
          'info',
          'collector',
          `processed ${i} measurements; avg ${avgRate.toFixed(
            2,
          )} broadcasts/sec`,
        );
      }
    })
    .catch(console.error);
}

log('info', 'collector', 'waiting for tag discovery');
ruuvi.on('found', onFound);

process.on('exit', code => {
  log('info', 'collector', `process exited with code ${code}`);
  log('info', 'collector', '--------------------------------------');
});

process.on('SIGINT', e => {
  log('info', 'collector', 'process interrupted');
  process.exit(2);
});

process.on('uncaughtException', e => {
  log('error', 'collector', 'caugh unhandled exception');
  e.stack.split('\n').forEach(line => log('error', 'collector', line));
});

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
