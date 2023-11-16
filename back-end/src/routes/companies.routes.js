const { Router } = require("express");
const CompanyControllers = require("../controllers/companies.controllers");

const companyRoutes = Router();

const companyController = new CompanyControllers();

companyRoutes.post("/", companyController.create);

module.exports = companyRoutes;
