import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import {getMessages} from './model/actions/messages';
import { MdSend } from "react-icons/md";

class ChatPage extends Component {

  constructor (props){
    super(props);
    this.state = {message:"",
                  messages: []};
  }

  getContact = (contacts, id) => {
    var contact = contacts.filter(function(contact){
      return (String(contact.userId) === id);
    })[0];
    return contact;
  }

  sendMessage = () => {
    this.setState({messages: [...this.state.messages, this.state.message],
                                message: ""});
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
                   <div className="MessageContainer">
                     <img className="avatar"
                    src={"/avatar/" + contact.picture} />
                    <div className="senderMessage">{e.body}</div>
                   </div>
                 </li>)
              }) : ""}
            {this.state.messages.map((e,i) => {
                return (<li key={i}>
                  <div className="MessageContainer myMessages">
                    Me: <br/>
                    {e}</div>
                  </li>)
             })}
        </ul>
        <p><input className="messageInput"
            value={this.state.message}
            onChange={e => this.setState({message:e.target.value})}
            type="text" maxLength="255"></input>
          <button onClick={this.sendMessage}><MdSend/></button></p>
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
