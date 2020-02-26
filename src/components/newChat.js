import React, {Component} from 'react';
import { connect } from "react-redux";
import Modal from "./modal";
import {postChat} from "../model/actions/chats";
import {IoMdCloseCircleOutline} from "react-icons/io";
class NewChatComponent extends Modal {

  render(){

      const content = this.props.contacts.map((e,i) => {
        return(<p className="selectable">
                <button onClick={() => this.props.postChat(e.chatName ,e.userId)}>
                  <img className="avatar"
                src={"/avatar/" + e.chatPicture} />
              {e.chatName}
                  </button>
                </p>)});
    return(
      <Modal hidden={this.props.hidden}
            toggleModal={this.props.toggleModal}
            title="New Chat"
            content={content}/>
    );
  }
}

function mapNewChat(state) {
  return {
    contacts: state.contacts,
  }
}

export default connect(
  mapNewChat,
  {postChat}
)(NewChatComponent);
