import knex from '../../db/knex';

export default function base () {
  return {
    getById: getById.bind(this),
    getAll: getAll.bind(this),
    insert: insert.bind(this),
    update: update.bind(this),
    delete: deleteUser.bind(this),
  };
}

const users = () => {
  return knex('users');
};

const getAll = () => {
  return users().select();
};

const getById = (userId) => {
  return users().where('id', parseInt(userId, 10)).first();
};

const insert = (user) => {
  return users().insert(
    user,
    ['id', 'name', 'active'],
  );
};

const update = (id, updates) => {
  return users()
    .where('id', parseInt(id, 10))
    .update(updates, ['id', 'name', 'active']);
};

const deleteUser = (id) => {
  return users().where('id', parseInt(id, 10)).del();
};
