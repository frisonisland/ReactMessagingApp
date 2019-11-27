import React, { Component } from 'react';
import AppRouter from './router';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/searchBar';
import { IoIosAddCircleOutline } from "react-icons/io";
import NewChatComponent from './components/newChat';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    };
  }

  toggleNewChat = () => {
    this.setState({
      hidden: !(this.state.hidden)
    });
  }
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <div className="HeaderLogo">
            <img src={logo} className="App-logo" alt="logo" />
            <span className="Header-title">App React</span>
            <button onClick={this.toggleNewChat}>
              <IoIosAddCircleOutline/>
            </button>
          </div>
            <SearchBar/>
        </header>
        <NewChatComponent toggleModal={this.toggleNewChat}
          hidden={this.state.hidden}/>
        <AppRouter/>
      </div>
    );
  }
}

export default App;
