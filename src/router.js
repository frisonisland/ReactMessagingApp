import React, { Component } from 'react';
import { connect } from "react-redux";
import {getContacts} from './model/actions/contacts';


class AppRouter extends Component {

  componentDidMount() {
    // calling the new action creator
    this.props.getContacts();
  }
  render() {
    return (
      <div className="App-content-wrapper">
          <div className="App-sider">
            <ul className="sidebar-menu">
              {this.props.contacts.map((e,i) => {
                 console.log("CONTACT: ", e);
                 console.log("CONTACT_I: ", i);
                 return <li key={i}>{e.name}</li>
              })}
            </ul>
            <div className="stickBottom">
              &copy; 2019 - Davide Frison
            </div>
          </div>
      <div className="App-content">
      </div>
    </div>
  )
  };
}
function mapContacts(state) {
  return {
    contacts: state.contacts
  }
}

export default connect(
  mapContacts,
  { getContacts }
)(AppRouter);
