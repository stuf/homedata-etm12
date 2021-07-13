'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date();
    return await queryInterface.bulkInsert(
      'sources',
      [
        {
          type: 'ruuvitag',
          mac: 'E8:53:A8:29:39:AF',
          name: 'Unknown (B)',
        },
        {
          type: 'ruuvitag',
          mac: 'E2:51:F7:EF:B3:84',
          name: 'Balcony (F)',
        },
        {
          type: 'ruuvitag',
          mac: 'F5:1F:89:90:35:27',
          name: 'Living Room (Detolf, D)',
        },
        {
          type: 'ruuvitag',
          mac: 'F2:0B:12:DD:BD:D9',
          name: 'Living Room (Balcony Door, C)',
        },
        {
          type: 'ruuvitag',
          mac: 'C4:B6:95:52:50:4B',
          name: 'Kitchen (A)',
        },
        {
          type: 'ruuvitag',
          mac: 'D8:8E:3D:A1:64:83',
          name: 'Office (E)',
        },
      ].map(it => Object.assign({}, it, { createdAt: now, updatedAt: now })),
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('sources', null, {});
  },
};
