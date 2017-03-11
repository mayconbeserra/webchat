import React from 'react';

class Login extends React.Component {

  render () {
    let userLogin;
    if (this.props.username === 'guest') {
      userLogin = (
        <div>
          <input type="text" placeholder="username" id="username" />
          <input placeholder="password" type="password" id="password" />
          <button onClick={ this.login }> Login </button>
        </div>
      );
    } else {
      userLogin = (
        <div>
          <strong> You are logged in as {this.props.username}
          </strong>
        </div>);
    }

    return userLogin;
  }
}

Login.propTypes = {
  username: React.PropTypes.string.isRequired,
};

export default Login;
