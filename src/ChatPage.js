import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import {getMessages, sendMessage} from './model/actions/messages';
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
    if (prevProps.chat.id !== this.props.chat.id) {
      //console.log(this.props.chat.id);
      this.props.getMessages(this.props.chat.id);
      console.log("Update");
    }
  }

  render() {
    return (
        this.props.chat ?
          <div className="Messages-wrapper">
            <ul> {this.props.messages.map((e,i) => {
                 return (<li key={i}>
                   <div className={(e.sender === "me" ? "myMessages":"")}>
                    {e.sender}
                   <div className="MessageContainer">
                    <div className="senderMessage">{e.body}</div>
                    <div className="message-date">{e.date}</div>
                   </div>
                 </div>
                 </li>)
              })}
            {this.state.messages.map((e,i) => {
                return (<li key={i}>
                  <div className="myMessages">
                    Me
                  <div className="MessageContainer">
                     <div className="senderMessage">{e.body}</div>
                     <div className="message-date">{e.date}</div>
                  </div>
                </div>
                </li>)})
            }
        </ul>
        <p><form onSubmit={this.sendMessage}>
        <input className="messageInput"
            value={this.state.message.body}
            onChange={e => this.setState({message: {body: e.target.value,
                                                    date: new Date().toISOString()}})}
            type="text" maxLength="255"></input>
          </form>
        </p></div>:""
  )
  }
}

function mapMessages(state) {
  return {
    messages: state.messages
  }
}

export default connect(
  mapMessages,
  { getMessages, sendMessage }
)(ChatPage);
