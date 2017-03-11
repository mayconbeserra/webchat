import React from 'react';

class Login extends React.Component {

  state = {
    userName: '',
  }

  handleUsername = (event) => {
    event.preventDefault();
    this.setState({ userName: event.target.value });
  }

  render () {
    let userLogin;
    if (this.props.username === 'guest') {
      userLogin = (
        <div>
          <input
            id="username"
            type="text"
            placeholder="username"
            value={ this.state.userName }
            onChange={ this.handleUsername }
          />
          <button onClick={ () => this.props.onLogin(this.state.userName) }> Login </button>
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
  onLogin: React.PropTypes.func.isRequired,
};

export default Login;
