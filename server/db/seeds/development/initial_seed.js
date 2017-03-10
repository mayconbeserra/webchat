exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        { name: 'Mary', active: true },
        { name: 'John', active: true },
      ]);
    });
};
