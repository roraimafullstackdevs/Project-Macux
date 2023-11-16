const knex = require("../database/knex");

class ConsumersRepository {
  async findById(id) {
    return await knex("consumers").where({ id }).first();
  }

  async findByEmail(email) {
    const consumer = await knex("consumers").where({ email }).first();
    return consumer;
  }

  async create({ name, email, password }) {
    const consumerID = await knex("consumers").insert({
      name,
      email,
      password,
    });

    return { id: consumerID };
  }
}

module.exports = ConsumersRepository;
