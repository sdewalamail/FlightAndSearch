const express = require("express");

const routes = express.Router();

const CityController = require("../../controller/city-controller");

routes.get("getAll", CityController.getAllCity);
routes.post("create", CityController.create);
routes.post("bulkcreate", CityController.bulkCreate);
routes.get("/:cityId", CityController.get);
routes.delete("/delete/:cityId", CityController.destroy);
routes.patch("/update/:cityId", CityController.update);

module.exports = routes;
