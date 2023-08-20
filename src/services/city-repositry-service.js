
const { CityRepositry } = require('../repository/index')


class CityServices {

    constructor() {
        this.cityRepositry = new CityRepositry();
    }

    async createCity(data) {
        try {
            const city = await this.cityRepositry.createCity(data)
            return city;
        } catch (error) {
            console.log(`Error comes form city services`);
            throw { error }
        }
    };

    async getAllCity(filter) {
        try {
            const allCity = await this.cityRepositry.getAllCity(filter);
            return allCity;
        } catch (error) { throw { error } }
    };

    async updateCity(cityId, data) {
        try {
            const city = await this.cityRepositry.updateCity(cityId, data);
            return city
        } catch (error) {
            console.log(`Error comes form city services`);
            throw { error }
        }
    };

    async getCity(cityId) {
        try {
            const city = this.cityRepositry.getCity(cityId);
            return city
        } catch (error) {
            console.log(`Error comes form city services`);
            throw { error }
        }
    }

    async deleteCity(cityId) {
        try {
            const city = await this.cityRepositry.deleteCity(cityId)
            return true;
        } catch (error) {
            console.log(`Error comes form city repositry`);
            throw { error }
        }
    };

    async bulkCreate(city) {
        try {
         const cities = await this.cityRepositry.bulkCreate(city);
         return cities;
   
        } catch (error) {
         console.log(`Error comes form city repositry`);
         throw { error }
        }
     }

};

module.exports = CityServices;
