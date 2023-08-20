
const { AirportRepositry } = require('../repository/index')


class AirportServices {
    constructor() {
        this.airportRepositry = new AirportRepositry();
    }

    async createAirport(data) {
        try {
            const airport = await this.airportRepositry.createCity(data)
            return airport;
        } catch (error) {
            console.log(`Error comes form airport services`);
            throw { error }
        }
    };

    async getAllAirport(filter) {
        try {
            const allairport = await this.airportRepositry.getAllAirport(filter);
            return allairport;
        } catch (error) { throw { error } }
    };

    async updateAirport(cityId, data) {
        try {
            const airport = await this.airportRepositry.updateAirport(cityId, data);
            return airport
        } catch (error) {
            console.log(`Error comes form airport services`);
            throw { error }
        }
    };

    async getAirport(airportId) {
        try {
            const airport = this.airportRepositry.getAirport(airportId);
            return airport;
        } catch (error) {
            console.log(`Error comes form airport services`);
            throw { error }
        }
    }

    async deleteAirport(airportId) {
        try {
            const airport = await this.airportRepositry.deleteAirport(airportId)
            return true;
        } catch (error) {
            console.log(`Error comes form airport repositry`);
            throw { error }
        }
    };

    async bulkCreate(city) {
        try {
         const airport = await this.airportRepositry.bulkCreate(airport);
         return airport;
        } catch (error) {
         console.log(`Error comes form airport repositry`);
         throw { error }
        }
     }

};

module.exports = AirportRepositry;
