import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import {doLogin} from './model/actions/login';
import { connect } from "react-redux";

class LoginPage extends Component {
  constructor (props){
  super(props);
  this.login = this.login.bind(this);
}

  login() {
  }

  render() {
    return (
      <div className="Login-wrapper">
        <p>
          <label>Username: </label><input type="text" name="username" />
        </p>
        <p>
          <label>Password: </label><input type="password" name="password" />
        </p>
        <button key="login_button">Login</button>
    </div>
  )
  }
}


function mapLogin(state) {
  return {
    token: state.token
  }
}

export default withRouter(connect(
  mapLogin,
  { doLogin }
)(LoginPage));
