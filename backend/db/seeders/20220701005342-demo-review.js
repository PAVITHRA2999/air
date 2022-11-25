'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Reviews', [
      {
        userId: 2,
        spotId: 1,
        review: 'Loved it here, will be back soon!',
        stars: parseInt(5),
      },
      {
        userId: 3,
        spotId: 1,
        review: 'Great host loved being here.',
        stars: parseInt(4),
      },
      {
        userId: 4,
        spotId: 1,
        review: 'The house have everything you could ask for. We are on our honeymoon and could not ask for a better experience!',
        stars: parseInt(5),
      },
      {
        userId: 5,
        spotId: 1,
        review: 'Minutes away from the beach! Would highly recommend to others!',
        stars: parseInt(4),
      },
      {
        userId: 2,
        spotId: 2,
        review: 'Was a great place and bargin for all that was included!',
        stars: parseInt(4),
      },
      {
        userId: 5,
        spotId: 2,
        review: 'Wish I could stay longer, there was a pizza convention down the block. What more could you ask for, great place and pizza!!!',
        stars: parseInt(4),
      },
      {
        userId: 6,
        spotId: 3,
        review: 'Perfectly cozy spot well worth it. We had a great time!',
        stars: parseInt(5),
      },
      {
        userId: 4,
        spotId: 4,
        review: 'Pools was great for the kids. There is plenty of outside space for the kids to play safely. Would love to come back!',
        stars: parseInt(5),
      },
      {
        userId: 5,
        spotId: 4,
        review: 'Accommodating host and beautiful backdrop could not ask for a better place to vaca!',
        stars: parseInt(4),
      },
      {
        userId: 1,
        spotId: 4,
        review: 'One day I wish to own a place like this. Until that day comes, this will make do.',
        stars: parseInt(4),
      },
      {
        userId: 2,
        spotId: 5,
        review: 'Pretty expensive for me taste.',
        stars: parseInt(2),
      },
      {
        userId: 1,
        spotId: 6,
        review: 'Reminds me of my nana home! So many memories! Thank you for hosting us!',
        stars: parseInt(4),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Reviews', {}, {});
  }
};
