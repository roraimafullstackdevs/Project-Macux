const { Router } = require("express");

const consumersRoutes = require("./consumers.routes");
const companiesRoutes = require("./companies.routes");
const sessionsRoutes = require("./sessions.routes");

const routes = Router();

routes.use("/consumers", consumersRoutes);
routes.use("/companies", companiesRoutes);
routes.use("/sessions", sessionsRoutes);

module.exports = routes;
