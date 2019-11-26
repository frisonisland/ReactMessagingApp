import React, { Component } from 'react';
import { connect } from "react-redux";
import {getContacts} from './model/actions/contacts';
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
                {this.props.contacts.map((e,i) => {
                //console.log(e);
                   return <SidebarChatItem
                     onClick={this.selectChat.bind(this,e)}
                     user={e} />
                })}
              </ul>
              <div className="stickBottom">
                &copy; 2019 - Davide Frison
              </div>
            </div>
        <div className="App-content">
          <ChatPage contact={this.state.contact}/>
        </div>
      </div>:<LoginPage/> }
    </div>
  )
  };
}

function mapContacts(state) {
  return {
    contacts: state.contacts,
    token: "aaa"//state.token
  }
}

export default connect(
  mapContacts,
  { getContacts}
)(AppRouter);
