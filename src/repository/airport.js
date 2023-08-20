const { Op } = require('sequelize');

const { Airport } = require('../models/index');

class AirportRepositry {
    async getAllAirport(filter) {
        try {
            let airport;
            if (filter.name) {
                airport = await Airport.findAll({ raw: true, where: { name: { [Op.like]: `${filter.name}%` } } })
            } else {
                console.log(Airport);
                airport = await Airport.findAll({})
            }
            return airport;
        } catch (error) {
            throw { error }
        }

    };
    async createAirport(data) {
        try {
            const airport = await Airport.create(data);
            return airport;
        } catch (error) {
            console.log(`Error comes form airport repositry`);
            throw { error }
        }
    };

    async updateAirport(cityId, data) {
        try {
            const airport = await Airport.update({ name: data.name }, { where: { id: cityId } });

            return city
        } catch (error) {
            console.log(`Error comes form airport repositry`);
            throw { error }
        }
    };

    async getAirport(cityId) {
        try {
            const airport = Airport.findByPk(cityId);
            return airport
        } catch (error) {
            console.log(`Error comes form airport repositry`);
            throw { error }
        }
    }

    async deleteAirport(cityId) {
        try {
            await Airport.destroy({ where: { id: cityId } });
            return true
        } catch (error) {
            console.log(`Error comes form city repositry`);
            throw { error }
        }
    };

    async bulkCreate(cities) {
        try {
            const createdAirport = await Airport.bulkCreate(cities, { returning: true });
            return createdAirport;
        } catch (error) {
            console.log('Error in bulkCreate:', error);
            throw error;
        }
    }
};

module.exports = AirportRepositry;
