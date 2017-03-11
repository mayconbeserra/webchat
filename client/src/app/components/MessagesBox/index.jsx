import React from 'react';
import { Panel } from 'react-bootstrap';

const MessagesBox = (props) => {
  /* eslint-disable react/no-array-index-key */
  const messages = props.messages.map((message, index) => {
    return (
      <li key={ index } className="message">
        <strong>{ message.username }: </strong>
        <span>{ message.message }</span>
      </li>
    );
  });

  const headerTitle = (<h3>Messages</h3>);
  return (
    <Panel header={ headerTitle } bsStyle="danger">
      <ul className="chat">
        { messages }
      </ul>
    </Panel>
  );
};

MessagesBox.propTypes = {
  messages: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default MessagesBox;
