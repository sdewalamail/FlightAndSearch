const { City } = require('../models/index');
const { Op } = require('sequelize');

class CityRepositry {

  async getAllCity(filter) {
    try {
      let city;
      if (filter.name) {
        console.log(filter.name);
        city = await City.findAll({ raw: true, where: { name: { [Op.like]: `${filter.name}%` } } })
      } else {
        city = await City.findAll({})
      }
      return city;
    } catch (error) {
      throw { error }
    }

  };
  async createCity({ name }) {
    try {
      const city = await City.create({ name });

      return city;

    } catch (error) {
      console.log(`Error comes form city repositry`);
      throw { error }
    }
  };

  async updateCity(cityId, data) {
    try {
      const city = await City.update({ name: data.name }, { where: { id: cityId } });

      return city
    } catch (error) {
      console.log(`Error comes form city repositry`);
      throw { error }
    }
  };

  async getCity(cityId) {
    try {
      const city = City.findByPk(cityId);
      return city
    } catch (error) {
      console.log(`Error comes form city repositry`);
      throw { error }
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({ where: { id: cityId } });
      return true
    } catch (error) {
      console.log(`Error comes form city repositry`);
      throw { error }
    }
  };

  async bulkCreate(cities) {
    try {
      const createdCities = await City.bulkCreate(cities, { returning: true });
      return createdCities;
    } catch (error) {
      console.log('Error in bulkCreate:', error);
      throw error;
    }
  }
}

module.exports = CityRepositry;
