const knex = require("../database/knex");

class SessionsRepository {
  async findByEmail(email) {
    const customer = await knex("consumers").where({ email }).first();
    return customer;
  }
}

module.exports = SessionsRepository;
