import React, { Component } from 'react';
import {IoIosSearch} from 'react-icons/io';

class SidebarChatItem extends Component {

  render() {
    return (
      <li onClick={this.props.onClick}
        key={this.props.chat.id}>
        <img className="avatar"
        src={"/avatar/" + this.props.chat.chatPicture} />
      <span>{this.props.chat.chatName}</span>
    </li>
    );
  }
}

export default SidebarChatItem;
