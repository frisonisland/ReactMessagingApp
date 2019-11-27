import React, {Component} from 'react';
import { connect } from "react-redux";
import Modal from "./modal";
import {IoMdCloseCircleOutline} from "react-icons/io";
class NewChatComponent extends Modal {

  render(){

      const content = this.props.contacts.map((e,i) => {
        return(<p className="selectable">
                <img className="avatar"
                src={"/avatar/" + e.picture} />
                  {e.name}
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
  mapNewChat
)(NewChatComponent);
