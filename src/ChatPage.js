import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import {getMessages, sendMessage} from './model/actions/messages';
import { IoIosArrowForward } from "react-icons/io";
import { MdSend } from "react-icons/md";

class ChatPage extends Component {

  constructor (props){
    super(props);
    this.state = {message: {body:"", date:""},
                  messages: []};
  }

  sendMessage = (e) => {
    e.preventDefault();
    this.props.sendMessage(this.props.chat.id, this.state.message.body);
    this.setState({messages: [...this.state.messages, this.state.message],
                                message: {body:"", date:""}
                              });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.chat.chatId !== this.props.chat.chatId) {
      this.props.getMessages(this.props.chat.chatId);
      console.log("Update");
    }
  }

  render() {
    console.log(this.props.contacts);
    return (
        this.props.chat ?
          <div className="ChatPage">
            <ul className="Messages-wrapper">
              {this.props.messages.map((e,i) => {
                 return (<li key={i}>
                   <div>
                     {e.name}
                   <div className="MessageContainer">
                    <div className="senderMessage">{e.message}</div>
                    <div className="message-date">{e.createdAt}</div>
                   </div>
                 </div>
                 </li>)
              })}
            </ul>
        <form onSubmit={this.sendMessage}>
        <input className="messageInput"
            value={this.state.message.body}
            onChange={e => this.setState({message: {body: e.target.value,
                                                    date: new Date().toISOString()}})}
            type="text" maxLength="255"></input>
          </form>
        </div>:""
  )
  }
}

function mapMessages(state) {
  return {
    messages: state.messages,
    contacts: state.contacts
  }
}

export default connect(
  mapMessages,
  { getMessages, sendMessage }
)(ChatPage);
