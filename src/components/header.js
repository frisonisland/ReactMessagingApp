import React, { Component } from 'react';
import SearchBar from './searchBar';
import logo from '../logo.svg';
import { connect } from "react-redux";
import { IoIosAddCircleOutline } from "react-icons/io";

class Header extends Component {
  render() {
    const user = this.props.user;
    return (
        <header className="App-header">
          <div className="HeaderLogo">
            <img src={logo} className="App-logo" alt="logo" />
            <span className="Header-title">{user ? "Welcome, " + user.name : "Breeze"}</span>
          </div>
            <SearchBar/>
        </header>
    );
  }
}

function mapHeader(state) {
  console.log(state);
  return {
    user: state.user
  }
}

export default connect(
  mapHeader
)(Header);
