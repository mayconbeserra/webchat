'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (err, req, res) {
  if (err) {
    console.log(err); // eslint-disable-line
    handleError(err, res);
  }
};

var handleError = function handleError(err, res) {
  if (!err.error && err.code === '23505') {
    return res.status(400).send({ error: err.detail });
  }
  return res.sendStatus(500);
};