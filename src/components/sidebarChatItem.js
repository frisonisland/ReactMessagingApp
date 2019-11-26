import React, { Component } from 'react';
import {IoIosSearch} from 'react-icons/io';

class SidebarChatItem extends Component {

  render() {
    return (
      <li onClick={this.props.onClick}
        key={this.props.chat.id}>
        <img className="avatar"
        src={"/avatar/" + this.props.chat.picture} />
      <span>{this.props.chat.name}</span>
    </li>
    );
  }
}

export default SidebarChatItem;
