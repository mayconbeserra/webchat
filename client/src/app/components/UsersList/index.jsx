import React from 'react';
import { Panel } from 'react-bootstrap';

const UsersList = (props) => {
  const users = props.users.map((user) => {
    return (<li>{ user }</li>);
  });
  const headerTitle = (<h3>Users: ({ users.length })</h3>);

  return (
    <Panel header={ headerTitle } bsStyle="info">
      <ul className="user-list">
        { users }
      </ul>
    </Panel>
  );
};

UsersList.propTypes = {
  users: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
};

export default UsersList;
