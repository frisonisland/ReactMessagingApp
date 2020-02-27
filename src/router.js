import React, { Component } from 'react';
import { connect } from "react-redux";
import {getContacts} from './model/actions/contacts';
import {getChats} from './model/actions/chats';
import ChatPage from './ChatPage';
import LoginPage from './LoginPage';
import Sidebar from './sidebar';
import SidebarChatItem from './components/sidebarChatItem';
import { IoIosAddCircleOutline, IoIosArrowForward } from "react-icons/io";
import { getCurrentUser } from "./model/actions/user";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class AppRouter extends Component {

  constructor (props){
    super(props);
    this.state = {contact:"", sidebarToggled:false};
  }
  componentDidMount() {
    if (this.props.token) {
      console.log("call")
      this.props.getContacts();
      this.props.getChats();
      this.props.getCurrentUser();
    }
  }
  componentDidUpdate(prevProps) {
    // calling the new action creator
    if (this.props.token && (this.props.token != prevProps.token)) {
      console.log("call")
      this.props.getContacts();
      this.props.getChats();
      this.props.getCurrentUser();
    }
  }

  selectChat = (contact) => {
    console.log(contact);
    this.setState({contact:contact});
  }
  toggleSidebar = () => {
    this.setState({
      sidebarToggled: !(this.state.sidebarToggled)
    });
  }

  render() {
    return (
      <div className="PageWrapper">
        {this.props.token ?
        <div className={"App-content-wrapper" + (this.state.sidebarToggled ? " sidebarToggled": "")}>
            <Sidebar chats={this.props.chats}
                      selectChat={this.selectChat}>
            </Sidebar>
        <div className="App-content">
          <button className="ghostButton sidebarOpener" onClick={this.toggleSidebar}><IoIosArrowForward/></button>
          <ChatPage chat={this.state.contact}/>
        </div>
      </div>:<LoginPage/> }
    </div>
  )
  };
}

function mapRouter(state) {
  return {
    contacts: state.contacts,
    token: state.token,
    chats: state.chats
  }
}

export default connect(
  mapRouter,
  { getContacts, getChats, getCurrentUser}
)(AppRouter);
