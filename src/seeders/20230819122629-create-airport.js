"use strict";

/** @type {import('sequelize-cli').Migration} */
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

    queryInterface.bulkInsert("Airports", [
      {
        name: "Kempegowda International Airport",
        createdAt: new Date(),
        updatedAt: new Date(),
        cityId: 6,
        address: "Bengaluru",
      },
      {
        name: "	Jindal Vijaynagar Airport",
        createdAt: new Date(),
        updatedAt: new Date(),
        cityId: 6,
      },
      {
        name: "Mangalore International Airport",
        createdAt: new Date(),
        updatedAt: new Date(),
        cityId: 6,
        address: "Mangalore",
      },
      {
        name: "Mysore Airport",
        createdAt: new Date(),
        updatedAt: new Date(),
        cityId: 6,
        address: "Mysore",
      },
      {
        name: "Raja Bhoj Airport",
        createdAt: new Date(),
        updatedAt: new Date(),
        cityId: 7,
        address: "Bhopal",
      },
      {
        name: "Jay Prakash Narayan Airport",
        createdAt: new Date(),
        updatedAt: new Date(),
        cityId: 10,
        address: "Patna",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
