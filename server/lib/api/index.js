'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validation = require('../middlewares/validation');

var _validation2 = _interopRequireDefault(_validation);

var _user = require('./user');

var user = _interopRequireWildcard(_user);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapRoute = function wrapRoute(fn) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return fn.apply(null, args) // eslint-disable-line
    .catch(args[2]); // call next()
  };
};

exports.default = function (app) {
  app.get('/api/v1/users', wrapRoute(user.list));
  app.get('/api/v1/users/:id', wrapRoute(user.detail));
  app.put('/api/v1/users/:id', (0, _validation2.default)().usersPut, wrapRoute(user.update));
  app.post('/api/v1/users', (0, _validation2.default)().usersPost, wrapRoute(user.create));
  app.delete('/api/v1/users/:id', wrapRoute(user.del));
  app.get('/_ping', function (req, res) {
    res.status(200).end();
  });

  app.use(function (req, res) {
    res.status(404).end();
  });
};