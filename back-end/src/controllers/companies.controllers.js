const CompaniesRepository = require("../repositories/companies.repositories");
const CompaniesService = require("../services/companies.services");

class CompaniesController {
  async create(request, response) {
    const { name, estado, municipio, consumer_id } = request.body;

    const companiesRepository = new CompaniesRepository();
    const companiesService = new CompaniesService(companiesRepository);
    try {
      const companiesID = await companiesService.create({
        name,
        estado,
        municipio,
        consumer_id,
      });

      return response.status(201).json(companiesID);
    } catch (error) {
      return response.status(error.statusCode).json(error.message);
    }
  }
}

module.exports = CompaniesController;
