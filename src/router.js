import React, { Component } from 'react';
import { connect } from "react-redux";
import {getContacts} from './model/actions/contacts';
import ChatPage from './ChatPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class AppRouter extends Component {

  componentDidMount() {
    // calling the new action creator
    this.props.getContacts();
  }
  render() {
    return (
      <Router><div className="App-content-wrapper">
          <div className="App-sider">
            <ul className="sidebar-menu">
              {this.props.contacts.map((e,i) => {
                 return <li key={i}>
                   <Link to={"/messages/" + e.userId} key={i}>
                     <img className="avatar"
                   src={"/avatar/" + e.picture} />
                 <span>{e.name}</span></Link></li>
              })}
            </ul>
            <div className="stickBottom">
              &copy; 2019 - Davide Frison
            </div>
          </div>
      <div className="App-content">
        <Switch>
          <Route path="/messages/:userId">
            <ChatPage/>
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
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
