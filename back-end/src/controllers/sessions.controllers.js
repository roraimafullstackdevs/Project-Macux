const SessionsRepository = require("../repositories/sessions.repositories");
const SessionsService = require("../services/sessions.services");

class SessionsControllers {
  async create(request, response) {
    const { email, password } = request.body;

    const sessionsRepository = new SessionsRepository();
    const sessionsService = new SessionsService(sessionsRepository);

    const res = await sessionsService.create({ email, password });

    return response.status(201).json(res);
  }
}

module.exports = SessionsControllers;
