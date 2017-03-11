import React from 'react';
import { Panel } from 'react-bootstrap';
import './style.scss';

const SendMessage = (props) => {
  const headerTitle = (<h3>Your Message:</h3>);
  return (
    <Panel
      header={ headerTitle }
      bsStyle="success"
      className={ props.isLogged ? '' : 'send-message-disabled' }
    >
      <input
        id="message"
        type="text"
        className="input-message"
        value={ props.currentMsg }
        onChange={ props.onMessageChange }
        onKeyDown={ props.onEnterMessage }
      />
      <button id="send" onClick={ props.onSendMessage }> Send </button>
    </Panel>
  );
};

SendMessage.propTypes = {
  isLogged: React.PropTypes.bool.isRequired,
  currentMsg: React.PropTypes.string.isRequired,
  onEnterMessage: React.PropTypes.func.isRequired,
  onMessageChange: React.PropTypes.func.isRequired,
  onSendMessage: React.PropTypes.func.isRequired,
};

export default SendMessage;
