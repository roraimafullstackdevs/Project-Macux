const { Router } = require("express");

const ConsumersController = require("../controllers/consumers.controllers");

const consumersRoutes = Router();

const consumersController = new ConsumersController();

consumersRoutes.post("/", consumersController.create);

module.exports = consumersRoutes;
