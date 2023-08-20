const express = require("express");

const { PORT } = require("./config/serverCofig");
const { sequelize } = require("./models");

const ApiRoutes = require("./routes");
const requestLogger = require("./middlewares/request.loger");

const setUPAndServerStart = () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(requestLogger);

  app.use("/api", ApiRoutes);

  sequelize
    .authenticate()
    .then(() => {
      console.log("\x1b[32m%s\x1b[0m", "Database connected successfully.");
      app.listen(PORT, () => console.log(`Server started on ${PORT}`));
    })
    .catch((err) => {
      console.error(
        "\x1b[31m%s\x1b[0m",
        "Unable to connect to the database:\n",
        err,
      );
    });
};

setUPAndServerStart();
