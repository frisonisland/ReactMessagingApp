import React, { Component } from 'react';
import AppRouter from './router';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/searchBar';

class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <div className="HeaderLogo">
            <img src={logo} className="App-logo" alt="logo" />
            <span className="Header-title">App React</span>
          </div>
            <SearchBar/>
        </header>
        <AppRouter/>
      </div>
    );
  }
}

export default App;
