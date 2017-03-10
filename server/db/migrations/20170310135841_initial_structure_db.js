exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('name').notNullable().unique();
    table.boolean('active').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
