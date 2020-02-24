import React, { Component } from 'react';
import AppRouter from './router';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import { IoIosAddCircleOutline, IoIosArrowForward } from "react-icons/io";
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
        <Header/> 
        <NewChatComponent toggleModal={this.toggleNewChat}
          hidden={this.state.hidden}/>
        <AppRouter/>
      </div>
    );
  }
}

export default App;
