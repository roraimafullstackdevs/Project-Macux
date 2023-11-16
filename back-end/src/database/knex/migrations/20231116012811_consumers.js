exports.up = (knex) =>
  knex.schema.hasTable("consumers").then((exists) => {
    if (!exists) {
      return knex.schema.createTable("consumers", (table) => {
        table.increments("id");
        table.text("name");
        table.text("email");
        table.text("password");

        table.timestamp("created_at").default(knex.fn.now());
        table.timestamp("updated_at").default(knex.fn.now());
      });
    } else {
      return knex.schema.up();
    }
  });

exports.down = (knex) => knex.schema.dropTable("consumers");
