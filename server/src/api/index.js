import val from '../middlewares/validation';
import * as user from './user';
import { getMessages } from '../chat';

const wrapRoute = (fn) => {
  return function (...args) {
    return fn.apply(null, args) // eslint-disable-line
      .catch(args[2]); // call next()
  };
};

export default (app) => {
  app.get('/api/v1/users', wrapRoute(user.list));
  app.get('/api/v1/users/:id', wrapRoute(user.detail));
  app.get('/api/v1/messages', (req, res) => {
    res.status(200).send(getMessages());
  });
  app.put('/api/v1/users/:id', val().usersPut, wrapRoute(user.update));
  app.post('/api/v1/users', val().usersPost, wrapRoute(user.create));
  app.delete('/api/v1/users/:id', wrapRoute(user.del));
  app.get('/_ping', (req, res) => {
    res.status(200).end();
  });

  app.use((req, res) => {
    res.status(404).end();
  });
};
