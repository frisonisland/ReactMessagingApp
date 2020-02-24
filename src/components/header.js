import React, { Component } from 'react';
import SearchBar from './searchBar';
import logo from '../logo.svg';
import { IoIosAddCircleOutline } from "react-icons/io";

class Header extends Component {
  render() {
    return (
        <header className="App-header">
          <div className="HeaderLogo">
            <img src={logo} className="App-logo" alt="logo" />
            <span className="Header-title">App React</span>
          </div>
            <SearchBar/>
        </header>
    );
  }
}

export default Header;
