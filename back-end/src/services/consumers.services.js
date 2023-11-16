const { hash } = require("bcryptjs");
const AppError = require("../utils/AppError");

class ConsumersService {
  constructor(consumersRepository) {
    this.consumersRepository = consumersRepository;
  }

  async create({ name, email, password }) {
    const verifyUserEmailExists = await this.consumersRepository.findByEmail(
      email
    );
    if (verifyUserEmailExists) {
      throw new AppError("Este email já está em uso!");
    }
    const hashedPassword = await hash(password, 8);
    const consumerID = await this.consumersRepository.create({
      name,
      email,
      password: hashedPassword,
    });
    return consumerID;
  }
}

module.exports = ConsumersService;
