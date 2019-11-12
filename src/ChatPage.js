import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import {getMessages} from './model/actions/messages';

class ChatPage extends Component {

  constructor (props){
  super(props);
  this.getContact = this.getContact.bind(this);
}

  getContact() {
    var contact = this.props.contacts.filter(function(contact){
      return (contact.userId === this.props.match.params.userId);
    })[0];
    return contact;
  }

  componentDidMount() {
    // calling the new action creator
    this.props.getMessages(this.props.match.params.userId);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.props.getMessages(this.props.match.params.userId);
      console.log("Update");
    }
  }
  render() {
    var contact = this.getContact();
    return (
      <div className="Messages-wrapper">
        <ul>
            {
               contact ? this.props.messages.map((e,i) => {
                 return (<li key={i}>
                   <img className="avatar"
                    src={"/avatar/" + this.state.contact.picture} />
                   <div className="senderMessage">{e.body}</div>
                   </li>)
              }) : ""}
        </ul>
    </div>
  )
  }
}
function mapMessages(state) {
  console.log(state.contacts);
  return {
    messages: state.messages,
    contacts: state.contacts
  }
}

export default withRouter(connect(
  mapMessages,
  { getMessages }
)(ChatPage));
