const express = require('express');

const routes = express.Router();

const AIRPORT = require('../../controller/airport');

routes.get("/getAll", AIRPORT.getAllAirport);
routes.get("/:airportId", AIRPORT.get);
routes.post("/create", AIRPORT.create);
routes.post("/bulkcreate", AIRPORT.bulkCreate);
routes.delete("/delete/:airportId", AIRPORT.destroy);
routes.patch("/update/:airportId", AIRPORT.update);


module.exports = routes;






