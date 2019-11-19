import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import {getMessages} from './model/actions/messages';

class ChatPage extends Component {

  constructor (props){
    super(props);
  }

  getContact = (contacts, id) => {
    var contact = contacts.filter(function(contact){
      return (String(contact.userId) === id);
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
      this.getContact(this.props.contacts,this.props.match.params.userId);
      console.log("Update");
    }
  }

  render() {
    const contact = this.getContact(this.props.contacts,this.props.match.params.userId);
    console.log(contact);
    console.log(this.props.messages);
    return (
      <div className="Messages-wrapper">
        <ul>
            {
               contact ? this.props.messages.map((e,i) => {
                 return (<li key={i}>
                   <img className="avatar"
                    src={"/avatar/" + contact.picture} />
                   <div className="senderMessage">{e.body}</div>
                   </li>)
              }) : ""}
        </ul>
    </div>
  )
  }
}
function mapMessages(state) {
  console.log(state);
  return {
    messages: state.messages,
    contacts: state.contacts
  }
}

export default withRouter(connect(
  mapMessages,
  { getMessages }
)(ChatPage));
