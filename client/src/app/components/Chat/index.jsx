import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import io from 'socket.io-client';
import Login from '../Login';
import MessagesBox from '../MessagesBox';
import UsersList from '../UsersList';
import SendMessage from '../SendMessage';

class Chat extends Component {
  state = {
    socket: io('http://localhost:3000'),
    username: 'guest',
    isLogged: false,
    messages: [],
    currentMsg: '',
    users: [],
  }

  componentDidMount = () => {
    const self = this;
    this.state.socket.on('receive-message', (message) => {
      const messages = self.state.messages;
      messages.push(message);
      self.setState({ messages });
    });

    this.state.socket.on('users-updated', (users) => {
      self.setState({ users });
    });

    if (this.state.username !== 'guest') {
      const username = JSON.parse(this.state.username);
      this.setState({ username });
      this.state.socket.emit('join', username);
    }
  }

  handleSendMessage = () => {
    const self = this;
    const message = {
      username: self.state.username,
      message: this.state.currentMsg,
    };

    self.state.socket.emit('message', message);
    this.setState({ currentMsg: '' });
  }

  handleEnterMessage = (event) => {
    const self = this;
    if (event.which === 13 && event.target.value.length > 0) {
      const message = {
        username: self.state.username,
        message: event.target.value,
      };
      self.state.socket.emit('message', message);
      this.setState({ currentMsg: '' });
    }
  }

  handleMessageChange = (event) => {
    const input = event.target;
    this.setState({ currentMsg: input.value });
  }

  render () {
    const panelTitle = (<h3>Welcome! It is time to chat!</h3>);
    return (
      <div>
        <Panel header={ panelTitle } bsStyle="primary">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-sm-12">
                <Login username={ this.state.username } />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-8">
                <MessagesBox messages={ this.state.messages } />
              </div>
              <div className="col-sm-4">
                <UsersList users={ this.state.users } />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <SendMessage
                  currentMsg={ this.state.currentMsg }
                  onEnterMessage={ this.handleEnterMessage }
                  onMessageChange={ this.handleMessageChange }
                  onSendMessage={ this.handleSendMessage }
                />
              </div>
            </div>
          </div>
        </Panel>
      </div>);
  }
}

export default Chat;
