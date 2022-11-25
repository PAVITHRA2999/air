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
      "Spots",
      [
        {
          ownerId: 2,
          address: "123 State St",
          city: "Los Angeles",
          state: "California",
          country: "USA",
          lat: 34.01844561178901,
          lng: -118.29996648302121,
          name: "My House",
          description:
            "Pool heat is included at no additional charge from October through May.",
          price: 468.98,
          previewImage:
            "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          ownerId: 2,
          address: "123 Ash St",
          city: "Burbank",
          state: "California",
          country: "USA",
          lat: 34.20712503992931,
          lng: -118.32551954048111,
          name: "Space House",
          description:
            "When you walk through the gate from the driveway or street, you're immediately welcomed into a very spacious courtyard.",
          price: 800,
          previewImage:
            "https://images.unsplash.com/photo-1608045742930-48cee6018255?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          ownerId: 2,
          address: "123123 Beet St",
          city: "Los Angeles",
          state: "California",
          country: "USA",
          lat: 34.06346464108932,
          lng: -118.43027192477669,
          name: "Cali Love",
          description:
            "You'll want to spend all your time poolside at Shelby Sands!",
          price: 350,
          previewImage:
            "https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=300&q=60",
        },
        {
          ownerId: 2,
          address: "8198 Uphill Rd",
          city: "Joshua Tree",
          state: "CA",
          country: "United States of America",
          lat: 34.13108700043468,
          lng: -116.31947990198891,
          name: "Joshua Tree with love",
          description:
            "Quite simply, Invisible House is the most spectacular house in Joshua Tree.",
          price: 1225,
          previewImage:
            "https://media.istockphoto.com/photos/interior-and-exterior-design-of-pool-villa-with-swimming-pool-picture-id918342482?k=20&m=918342482&s=170667a&w=0&h=59LgUC91MXY2mI6gLzUlZ2LQVFFa9PFhhPcfxLd8Sqk=",
        },
        {
          ownerId: 2,
          address: "123123 Colder St",
          city: "Denver",
          state: "Colorado",
          country: "USA",
          lat: 39.725989004200514,
          lng: -104.98422826625696,
          name: "My Rocky Hideout",
          description:
            "For the adventurous types, also within walking distance are some popular hiking trail",
          price: 730,
          previewImage:
            "https://images.unsplash.com/photo-1567428485548-c499e4931c10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Njh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          ownerId: 2,
          address: "123123 Deermoore St",
          city: "San Francisco",
          state: "California",
          country: "USA",
          lat: 37.76503358527803,
          lng: -122.41375909258484,
          name: "Our House",
          description:
            "This home is very close to the shuttle stops in Palm Springs.",
          price: 366,
          previewImage:
            "https://images.unsplash.com/photo-1627865485227-fc7c2f551afc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGhvbWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=60",
        },
        {
          ownerId: 1,
          address: "123123 Ocean Ave",
          city: "Santa Barbara",
          state: "California",
          country: "USA",
          lat: 34.41529919672235,
          lng: -119.6921773262848,
          name: "Coast Love",
          description: "Just minutes away from the Ocean",
          price: 232,
          previewImage:
            "https://images.unsplash.com/photo-1597211833712-5e41faa202ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=60",
        },
        {
          ownerId: 1,
          address: "123 Creed Mill St",
          city: "Greensboro",
          state: "North Carolina",
          country: "USA",
          lat: 36.07777815606881,
          lng: -79.80131009366899,
          name: "Homeward Bound",
          description: "Spacious spot in the wilderness.",
          price: 260,
          previewImage:
            "https://images.unsplash.com/photo-1589129140837-67287c22521b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGNhYmlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=60",
        },
        {
          ownerId: 1,
          address: "123123 Nature Ave",
          city: "Austin",
          state: "Texas",
          country: "USA",
          lat: 30.302668476831975,
          lng: -97.72896921355883,
          name: "Modern Ranch House",
          description:
            "This home was build in 2015. Minutes away from the city!",
          price: 366,
          previewImage:
            "https://images.unsplash.com/photo-1524627681145-fc98c3317b10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGJlYXV0aWZ1bCUyMGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=60",
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
    await queryInterface.bulkDelete("Spots", {}, {});
  },
};
