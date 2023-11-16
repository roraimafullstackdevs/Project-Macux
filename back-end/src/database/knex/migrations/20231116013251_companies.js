exports.up = (knex) =>
  knex.schema.createTable("companies", (table) => {
    table.increments("id");
    table.text("name");
    table.text("estado");
    table.text("municipio");
    table.bigint("consumer_id");

    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
  });

exports.down = (knex) => knex.schema.dropTable("companies");
