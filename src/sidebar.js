import React, { Component } from 'react';
import { connect } from "react-redux";
import SidebarChatItem from './components/sidebarChatItem';
import { IoIosAddCircleOutline, IoIosArrowForward } from "react-icons/io";

export default class Sidebar extends Component {

  componentDidUpdate(){
    console.log(this.props.chats);
  }
  render() {
    return (
      <div className="App-sider">
        <ul className="sidebar-menu">
          {this.props.chats.map((e,i) => {
             return <SidebarChatItem
               onClick={this.props.selectChat.bind(this,e)}
               chat={e}/>
          })}
        </ul>
        <div className="stickBottom">
          &copy; 2019 - Davide Frison
        </div>
      </div>
  )
  };
}
