const ConsumersRepository = require("../repositories/consumers.repositories");
const ConsumersService = require("../services/consumers.services");

class ConsumersController {
  async create(request, response) {
    const { name, email, password } = request.body;

    const consumersRepository = new ConsumersRepository();
    const consumersService = new ConsumersService(consumersRepository);
    try {
      const consumerID = await consumersService.create({
        name,
        email,
        password,
      });

      return response.status(201).json(consumerID);
    } catch (error) {
      return response.status(error.statusCode).json(error.message);
    }
  }
}

module.exports = ConsumersController;
