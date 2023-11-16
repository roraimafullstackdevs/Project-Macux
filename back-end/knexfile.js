const path = require("path");

module.exports = {
  development: {
    client: "mysql2",
    version: "8.0",
    connection: {
      host: "127.0.0.1",
      port: 3307,
      user: "root",
      password: "root",
      database: "hackathon",
    },
    pool: { min: 0, max: 7 },
    migrations: {
      directory: path.resolve(
        __dirname,
        "src",
        "database",
        "knex",
        "migrations"
      ),
    },
    useNullAsDefault: true,
  },
};
