const { compare } = require("bcryptjs");
const authConfig = require("../configs/auth");
const AppError = require("../utils/AppError");
const { sign } = require("jsonwebtoken");

class SessionsService {
  constructor(SessionsRepository) {
    this.sessionsRepository = SessionsRepository;
  }

  async create({ email, password }) {
    const customer = await this.sessionsRepository.findByEmail(email);

    if (!customer) {
      throw new AppError("E-mail e/ou senha incorrecto(a)", 401);
    }

    const passwordVerification = await compare(password, customer.password);

    if (!passwordVerification) {
      throw new AppError("E-mail e/ou senha incorrecto(a)", 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: String(customer.id),
      expiresIn,
    });

    return { customer, token };
  }
}

module.exports = SessionsService;
