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

  sendMessage = () => {
    this.setState({messages: [...this.state.messages, this.state.message],
                                message: ""});
  }

  componentDidMount() {
    // calling the new action creator
    this.props.getMessages(this.props.contact.userId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.contact.userId !== this.props.contact.userId) {
      this.props.getMessages(this.props.contact.userId);
      console.log("Update");
    }
  }

  render() {
    return (
        this.props.contact ?
          <div className="Messages-wrapper">
            <ul> {this.props.messages.map((e,i) => {
                 return (<li key={i}>
                   <div className="MessageContainer">
                     <img className="avatar"
                    src={"/avatar/" + this.props.contact.picture} />
                    <div className="senderMessage">{e.body}</div>
                   </div>
                 </li>)
              })}
            {this.state.messages.map((e,i) => {
                return (<li key={i}>
                  <div className="MessageContainer myMessages">
                    Me: <br/>
                    {e}</div>
                </li>)})
            }
        </ul>
        <p><input className="messageInput"
            value={this.state.message}
            onChange={e => this.setState({message:e.target.value})}
            type="text" maxLength="255"></input>
          <button onClick={this.sendMessage}><MdSend/></button>
        </p></div>:""
  )
  }
}
function mapMessages(state) {
  console.log(state);
  return {
    messages: state.messages
  }
}

export default connect(
  mapMessages,
  { getMessages }
)(ChatPage);
