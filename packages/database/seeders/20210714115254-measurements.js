'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date();
    const createdAt = now;
    const updatedAt = now;
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('measurements', [
      {
        time: new Date('2021-07-14T11:54:22.400Z'),
        source: 'F2:0B:12:DD:BD:D9',
        sequenceNumber: 33690,
        rssi: -91,
        tsPower: 4,
        temperature: 27.12,
        humidity: 41.7925,
        pressure: 101230,
        battery: 2911,
        accelerationX: 916,
        accelerationY: 504,
        accelerationZ: -28,
        createdAt,
        updatedAt,
      },
      {
        time: '2021-07-14T12:04:39.110Z',
        source: 'D8:8E:3D:A1:64:83',
        sequenceNumber: 17530,
        rssi: -76,
        tsPower: 4,
        battery: 2971,
        temperature: 25.28,
        humidity: 39.3475,
        pressure: 101185,
        accelerationX: 452,
        accelerationY: 928,
        accelerationZ: -12,
        createdAt: '2021-07-14T12:04:39.110Z',
        updatedAt: '2021-07-14T12:04:39.110Z',
      },
      {
        time: '2021-07-14T12:04:57.398Z',
        source: 'F5:1F:89:90:35:27',
        sequenceNumber: 17810,
        rssi: -95,
        tsPower: 4,
        battery: 2989,
        temperature: 27.17,
        humidity: 41.255,
        pressure: 101165,
        accelerationX: -4,
        accelerationY: -4,
        accelerationZ: 1024,
        createdAt: '2021-07-14T12:04:57.398Z',
        updatedAt: '2021-07-14T12:04:57.398Z',
      },
      {
        time: '2021-07-14T12:05:01.019Z',
        source: 'F2:0B:12:DD:BD:D9',
        sequenceNumber: 34189,
        rssi: -85,
        tsPower: 4,
        battery: 2911,
        temperature: 27.11,
        humidity: 41.5725,
        pressure: 101219,
        accelerationX: 912,
        accelerationY: 500,
        accelerationZ: -28,
        createdAt: '2021-07-14T12:05:01.019Z',
        updatedAt: '2021-07-14T12:05:01.019Z',
      },
      {
        time: '2021-07-14T12:05:02.206Z',
        source: 'D8:8E:3D:A1:64:83',
        sequenceNumber: 17549,
        rssi: -72,
        tsPower: 4,
        battery: 2959,
        temperature: 25.28,
        humidity: 39.3825,
        pressure: 101183,
        accelerationX: 444,
        accelerationY: 920,
        accelerationZ: -12,
        createdAt: '2021-07-14T12:05:02.206Z',
        updatedAt: '2021-07-14T12:05:02.206Z',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
