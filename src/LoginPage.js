import React, {Component, useState} from 'react';
import { withRouter } from 'react-router-dom';
import {doLogin} from './model/actions/login';
import { connect } from "react-redux";

class LoginPage extends Component {
  constructor (props){
  super(props);
  this.state = {username:"", password:"", error:""};
  this.login = this.login.bind(this);
  this.validateForm = this.validateForm.bind(this);
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }


  login() {
    const formValid = this.validateForm();
    if (!formValid) {
      this.setState({error:"Invalid username or password"})
    }
    else {
      this.props.doLogin(this.state.username, this.state.password).then(
        a => console.log(a)
      );
    }
  }

  render() {
    return (
      <div className="Login-wrapper">
        <p>
          <label>Username: </label><input type="text" name="username"
            value={this.state.username}
            onChange={e => this.setState({username: e.target.value})}/>
        </p>
        <p>
          <label>Password: </label><input type="password" name="password"
            value={this.state.password}
            onChange={e => this.setState({password: e.target.value})}/>
        </p>
        <button key="login_button" onClick={this.login}>Login</button>
        {this.props.error ? <p>Invalid username or password</p>: ""}
    </div>
  )
  }
}


function mapLogin(state) {
  return {
    token: state.token,
    error: state.error
  }
}

export default connect(
  mapLogin,
  { doLogin }
)(LoginPage);
