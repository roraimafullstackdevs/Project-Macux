const AppError = require("../utils/AppError");

class CompanyService {
  constructor(companyRepository) {
    this.companyRepository = companyRepository;
  }

  async create({ name, estado, municipio, consumer_id }) {
    const compayId = await this.companyRepository.create({
      name,
      estado,
      municipio,
      consumer_id,
    });
    return compayId;
  }
}

module.exports = CompanyService;
