"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    static associate(models) {
      this.belongsTo(models.City, {
        foreignKey: "cityId",
        onDelete: "CASCADE",
      });
    }
  }
  Airport.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
      },
      cityId: {
        type: DataTypes.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "City",
          key: "id",
          as: "cityId",
        },
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Airport",
    },
  );

  return Airport;
};
