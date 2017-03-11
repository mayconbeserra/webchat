import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './components/Chat';

const App = () => {
  return (
    <div>
      <Chat />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('app'), // eslint-disable-line 
);
