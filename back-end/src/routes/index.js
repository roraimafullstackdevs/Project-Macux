const { Router } = require("express");

const consumersRoutes = require("./consumers.routes");
const companiesRoutes = require("./companies.routes");

const routes = Router();

routes.use("/consumers", consumersRoutes);
routes.use("/companies", companiesRoutes);

module.exports = routes;
