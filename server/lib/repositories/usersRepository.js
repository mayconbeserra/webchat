'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = base;

var _knex = require('../../db/knex');

var _knex2 = _interopRequireDefault(_knex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function base() {
  return {
    getById: getById.bind(this),
    getAll: getAll.bind(this),
    insert: insert.bind(this),
    update: update.bind(this),
    delete: deleteUser.bind(this)
  };
}

var users = function users() {
  return (0, _knex2.default)('users');
};

var getAll = function getAll() {
  return users().select();
};

var getById = function getById(userId) {
  return users().where('id', parseInt(userId, 10)).first();
};

var insert = function insert(user) {
  return users().insert(user, ['id', 'name', 'active']);
};

var update = function update(id, updates) {
  return users().where('id', parseInt(id, 10)).update(updates, ['id', 'name', 'active']);
};

var deleteUser = function deleteUser(id) {
  return users().where('id', parseInt(id, 10)).del();
};