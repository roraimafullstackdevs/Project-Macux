const knex = require("../database/knex");

class CompanyRepository {
  async findById(id) {
    return await knex("companies").where({ id }).first();
  }

  async create({ name, estado, municipio, consumer_id }) {
    const companyId = await knex("companies").insert({
      name,
      estado,
      municipio,
      consumer_id,
    });

    return { id: companyId };
  }
}

module.exports = CompanyRepository;
