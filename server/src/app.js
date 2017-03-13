import express from 'express';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import socketIO from 'socket.io';
import http from 'http';
import cors from 'cors';
import api from './api';
import chatService from './chat';
import errors from './middlewares/errors';

export async function application () {
  const app = express();

  app.use(bodyParser.json());
  app.use(expressValidator());
  app.use(cors());
  api(app);
  app.use(errors);

  return app;
}

export async function start (config) {
  try {
    const app = await application(config);
    const server = http.createServer(app);
    const io = socketIO.listen(server);

    server.listen(config.env.http.port);
    console.log(`listening backend on ${config.env.http.host}:${config.env.http.port}`); /* eslint no-console:0 */
    console.log('listening frontend on http://0.0.0.0:8081');

    chatService(io);
  } catch (err) {
    console.log(`A critical error happened: ${err}`);
  }
}
