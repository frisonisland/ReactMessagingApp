import React, { Component } from 'react';
import { connect } from "react-redux";
import {getContacts} from './model/actions/contacts';
import {getChats} from './model/actions/chats';
import ChatPage from './ChatPage';
import LoginPage from './LoginPage';
import SidebarChatItem from './components/sidebarChatItem';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class AppRouter extends Component {

  constructor (props){
    super(props);
    this.state = {contact:""};
  }

  componentDidMount() {
    // calling the new action creator
    this.props.getContacts();
    this.props.getChats();
  }

  selectChat = (contact) => {
    console.log("select chat");
    this.setState({contact:contact});
  }

  render() {
    return (
      <div>
        {this.props.token ?
        <div className="App-content-wrapper">
            <div className="App-sider">
              <ul className="sidebar-menu">
                {this.props.chats.map((e,i) => {
                //console.log(e);
                   return <SidebarChatItem
                     onClick={this.selectChat.bind(this,e)}
                     chat={e} />
                })}
              </ul>
              <div className="stickBottom">
                &copy; 2019 - Davide Frison
              </div>
            </div>
        <div className="App-content">
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
    token: "aaa",//state.token
    chats: state.chats
  }
}

export default connect(
  mapRouter,
  { getContacts, getChats}
)(AppRouter);
