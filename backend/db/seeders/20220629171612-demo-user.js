'use strict';

const bcrypt = require('bcryptjs');

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
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Demo',
        lastName: 'User',
        username: 'DemoUser',
        email: 'demo@demo.io',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName: 'James',
        lastName: 'Kim',
        username: 'jjaamm',
        email: 'james@example.com',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName: 'Lee',
        lastName: 'Dee',
        username: 'rcurry',
        email: 'bb@gmail.com',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        firstName: 'Zaya',
        lastName: 'Bree',
        username: 'breeZ',
        email: 'ma@example.com',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        firstName: 'Travis',
        lastName: 'Baker',
        username: 'Tbaker',
        email: 'bakerT@example.com',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        firstName: 'CJ',
        lastName: 'Son',
        username: 'SunnyCJ',
        email: 'jc@gmail.com',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        firstName: 'Peter',
        lastName: 'Parker',
        username: 'spidey',
        email: 'ppspidey@example.com',
        hashedPassword: bcrypt.hashSync('password')
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
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['DemoUser', 'chanley', 'rcurry', 'mmaya', 'bsmith', 'cjohnson', 'dwilliams'] }
    }, {});
  }
};
