const express = require("express");

const routes = express.Router();

const City = require("./city");
const Airport = require("./airport");

routes.use("/city", City);
routes.use("/airport", Airport);

module.exports = routes;
