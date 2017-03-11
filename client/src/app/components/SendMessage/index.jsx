import React from 'react';
import { Panel } from 'react-bootstrap';
import './style.scss';

const SendMessage = (props) => {
  const headerTitle = (<h3>Your Message:</h3>);
  return (
    <Panel header={ headerTitle } bsStyle="success" className="send-message-disabled">
      <input
        type="text"
        id="message"
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
  currentMsg: React.PropTypes.string.isRequired,
  onEnterMessage: React.PropTypes.func.isRequired,
  onMessageChange: React.PropTypes.func.isRequired,
  onSendMessage: React.PropTypes.func.isRequired,
};

export default SendMessage;
