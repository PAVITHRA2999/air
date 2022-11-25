"use strict";

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
    return queryInterface.bulkInsert(
      "Images",
      [
        {
          spotId: 1,
          imageableType: "Spot",
          url:
            "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW5kb29yc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          spotId: 1,
          imageableType: "Spot",
          url:
            "https://images.unsplash.com/photo-1615874694520-474822394e73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG9tZSUyMGRlY29yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          spotId: 1,
          imageableType: "Spot",
          url:
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGhvbWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=60",
        },
        {
          spotId: 1,
          imageableType: "Spot",
          url:
            "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJlZHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
          reviewId: 1,
          imageableType: "Review",
          url:
            "https://a0.muscache.com/im/pictures/073f3f02-503b-4135-a138-dc0fca5af6d7.jpg?im_w=1200",
        },
        {
          reviewId: 1,
          imageableType: "Review",
          url:
          'https://images.unsplash.com/photo-1659431474168-d5a04c4ba36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=60',
        },
        {
          spotId: 2,
          imageableType: "Spot",
          url:
            "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGluZG9vcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
          spotId: 2,
          imageableType: "Spot",
          url:
            "https://images.unsplash.com/photo-1616046080409-a7c37f84ce15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          spotId: 2,
          imageableType: "Spot",
          url:
            "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGhvbWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=60",
        },
        {
          reviewId: 4,
          imageableType: "Review",
          url:
            "https://a0.muscache.com/im/pictures/miso/Hosting-45054521/original/5c16d2f4-c020-4126-8899-fdf39cf38385.jpeg?im_w=1200",
        },
        {
          spotId: 3,
          imageableType: "Spot",
          url:
            "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=60",
        },
        {
          spotId: 3,
          imageableType: "Spot",
          url:
            "https://images.unsplash.com/photo-1623920996292-42a1930285a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGluZG9vcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
          spotId: 4,
          imageableType: "Spot",
          url:
            "https://images.unsplash.com/photo-1508330570239-ce7cabceee22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0OTcyNTAzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=300&q=60",
        },
        {
          spotId: 7,
          imageableType: "Spot",
          url:
            "https://images.unsplash.com/photo-1510608658071-c48be9a076f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjBob3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=60",
        },
        {
          spotId: 7,
          imageableType: "Spot",
          url:
            "https://images.unsplash.com/photo-1613553497126-a44624272024?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=300&q=60",
        },
        {
          spotId: 7,
          imageableType: "Spot",
          url:
            "https://images.unsplash.com/photo-1581609836630-9007630f7a7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=60",
        },
        {
          spotId: 7,
          imageableType: "Spot",
          url:
            "https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aW50ZXJpb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=300&q=60",
        },
        {
          spotId: 8,
          imageableType: "Spot",
          url:
          "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGNhYmlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=60"
        },
        {
          spotId: 8,
          imageableType: "Spot",
          url:
          "https://images.unsplash.com/photo-1622480510913-a2418017b565?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2lsZGVybmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=60"
        },
        {
          spotId: 8,
          imageableType: "Spot",
          url:
          "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGludGVyaW9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=60"
        },
        {
          spotId: 8,
          imageableType: "Spot",
          url:
          "https://images.unsplash.com/photo-1537301636683-5ac98e0466a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGludGVyaW9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=60"
        },
        {
          spotId: 9,
          imageableType: "Spot",
          url:
          "https://images.unsplash.com/photo-1581784878214-8d5596b98a01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGludGVyaW9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=60"
        },
        {
          spotId: 9,
          imageableType: "Spot",
          url:
          "https://images.unsplash.com/photo-1622372738946-62e02505feb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGludGVyaW9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=60"
        },
        {
          spotId: 9,
          imageableType: "Spot",
          url:
          "https://images.unsplash.com/photo-1632566853092-a0faa4665585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGJlZHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=300&q=60"
        },
        {
          spotId: 9,
          imageableType: "Spot",
          url:
          "https://images.unsplash.com/photo-1567002260451-50e05a6b031a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIyfHxiYXRocm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=60"
        },
        {
          reviewId: 10,
          imageableType: "Review",
          url:
          "https://images.unsplash.com/photo-1657299170964-205905bb0940?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=300&q=60"
        },
        {
          reviewId: 10,
          imageableType: "Review",
          url:
          "https://images.unsplash.com/photo-1659461258646-1544f02ad35b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=60"
        },
        {
          reviewId: 10,
          imageableType: "Review",
          url:
          "https://images.unsplash.com/photo-1659385631755-37e381232c28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3NHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=60"
        },
        {
          reviewId: 10,
          imageableType: "Review",
          url:
          "https://images.unsplash.com/photo-1659434619586-b27c5c8ad8df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4OHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=60"
        },
        {
          reviewId: 12,
          imageableType: "Review",
          url:
          "https://images.unsplash.com/photo-1659428737145-eaabc9a83207?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5NHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=60"
        },
        {
          reviewId: 12,
          imageableType: "Review",
          url:
          "https://images.unsplash.com/photo-1659428737175-8defc2c99d50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=300&q=60"
        },
        {
          reviewId: 10,
          imageableType: "Review",
          url:
          "https://images.unsplash.com/photo-1659366269920-bc753d52dee7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=300&q=60"
        },
        {
          reviewId: 12,
          imageableType: "Review",
          url:
          "https://images.unsplash.com/photo-1657299170936-0531a116c87c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=300&q=60"
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Images", {}, {});
  },
};
