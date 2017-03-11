export default function handleChat (io) {
  io.on('connection', (socket) => {
    console.log('Client Connected'); // eslint-disable-line no-console
    socket.on('join', (username) => {
      updatePeople(username, socket.id);
      io.emit('users-updated', clientUsers);
    });
    socket.on('disconnect', () => {
      console.log('Client Disconnected'); // eslint-disable-line no-console
      delete people[socket.id];
    });
    socket.on('message', (message) => {
      console.log(message); // eslint-disable-line no-console
      io.emit('receive-message', message);
    });
  });
}

const people = {};
let clientUsers = [];

const updatePeople = (username, id) => {
  const userArray = [];
  /* eslint-disable no-restricted-syntax */
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
