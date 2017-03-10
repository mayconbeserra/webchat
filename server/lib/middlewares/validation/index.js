'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return {
    usersPost: _validateUsers.validatePost,
    usersPut: _validateUsers.validatePut
  };
};

var _validateUsers = require('./validateUsers');