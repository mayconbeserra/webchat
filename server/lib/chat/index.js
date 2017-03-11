'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = handleChat;
function handleChat(io) {
  io.on('connection', function (socket) {
    console.log('Client Connected'); // eslint-disable-line no-console
    socket.on('join', function (username) {
      updatePeople(username, socket.id);
      io.emit('users-updated', clientUsers);
    });
    socket.on('disconnect', function () {
      console.log('Client Disconnected'); // eslint-disable-line no-console
      delete people[socket.id];
    });
    socket.on('message', function (message) {
      console.log(message); // eslint-disable-line no-console
      io.emit('receive-message', message);
    });
  });
}

var people = {};
var clientUsers = [];

var updatePeople = function updatePeople(username, id) {
  var userArray = [];
  /* eslint-disable no-restricted-syntax */
  for (var key in people) {
    if (people[key] === username) {
      return;
    }
    userArray.push(people[key]);
  }
  userArray.push(username);
  people[id] = username;
  clientUsers = userArray;
};