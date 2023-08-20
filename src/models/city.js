'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class City extends Model {
    static associate(models) {
      this.hasMany(models.Airport, { foreignKey: 'cityId' })
    }
  }

  City.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'City',
    tableName: 'city',
    timestamps: true
  });

  return City;
};