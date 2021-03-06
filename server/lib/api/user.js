'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.del = exports.update = exports.create = exports.detail = exports.list = undefined;

var list = exports.list = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(req, res) {
    var data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _user2.default)({
              repo: (0, _usersRepository2.default)()
            }).list();

          case 2:
            data = _context.sent;

            res.status(200).json(data);

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function list(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var detail = exports.detail = function () {
  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(req, res) {
    var data;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _user2.default)({
              repo: (0, _usersRepository2.default)()
            }).detail(req.params.id);

          case 2:
            data = _context2.sent;


            if (!detail) res.status(404).end();

            res.status(200).json(data);

          case 5:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function detail(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var create = exports.create = function () {
  var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(req, res) {
    var newEntity;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _user2.default)({
              repo: (0, _usersRepository2.default)()
            }).create(req.body);

          case 2:
            newEntity = _context3.sent;


            if (!newEntity) res.status(400).end();

            res.status(201).json(newEntity[0]);

          case 5:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function create(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var update = exports.update = function () {
  var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(req, res) {
    var result;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _user2.default)({
              repo: (0, _usersRepository2.default)()
            }).update(req.params.id, req.body);

          case 2:
            result = _context4.sent;


            if (!result) res.status(400).end();

            res.status(200).json(result[0]);

          case 5:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function update(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

var del = exports.del = function () {
  var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(req, res) {
    var user;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return (0, _usersRepository2.default)().getById(req.params.id);

          case 2:
            user = _context5.sent;

            if (user) {
              _context5.next = 5;
              break;
            }

            return _context5.abrupt('return', res.status(404).end());

          case 5:
            _context5.next = 7;
            return (0, _user2.default)({
              repo: (0, _usersRepository2.default)()
            }).del(req.params.id);

          case 7:
            return _context5.abrupt('return', res.status(200).json(user));

          case 8:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function del(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

var _usersRepository = require('../repositories/usersRepository');

var _usersRepository2 = _interopRequireDefault(_usersRepository);

var _user = require('../services/v1/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }