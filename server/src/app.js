import express from 'express';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import socketIO from 'socket.io';
import http from 'http';
import cors from 'cors';
import api from './api';

const people = {};
let clientUsers = [];

export async function application () {
  const app = express();

  app.use(bodyParser.json());
  app.use(expressValidator());
  app.use(cors());

  api(app);

  app.use((err, req, res, next) => { // eslint-disable-line consistent-return,no-unused-vars
    if (err) {
      console.log(err);
      return handleError(err, res);
    }
  });

  return app;
}

const handleError = (err, res) => {
  if (!err.error && err.code === '23505') {
    return res.status(400).send({ error: err.detail });
  }
  return res.sendStatus(500);
};

const updatePeople = (username, id) => {
  const userArray = [];
  for (const key in people) {
    if (people[key] === username) {
      return;
    }
    userArray.push(people[key]);
  }
  userArray.push(username);
  people[id] = username;
  clientUsers = userArray;
};

const handleChat = (io) => {
  io.on('connection', (socket) => {
    console.log('Client Connected');
    socket.on('join', (username) => {
      updatePeople(username, socket.id);
      io.emit('users-updated', clientUsers);
    });
    socket.on('disconnect', () => {
      console.log('Client Disconnected');
      delete people[socket.id];
    });
    socket.on('message', (message) => {
      console.log(message);
      io.emit('receive-message', message);
    });
  });
};

export async function start (config) {
  try {
    const app = await application(config);
    const server = http.createServer(app);
    const io = socketIO.listen(server);

    server.listen(config.env.http.port);
    console.log(`listening on ${config.env.http.host}:${config.env.http.port}`); /* eslint no-console:0 */

    handleChat(io);
  } catch (err) {
    console.log(`A critical error happened: ${err}`);
  }
}
