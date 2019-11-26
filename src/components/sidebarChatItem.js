import React, { Component } from 'react';
import {IoIosSearch} from 'react-icons/io';

class SidebarChatItem extends Component {

  render() {
    return (
      <li onClick={this.props.onClick}
        key={this.props.user.userId}>
        <img className="avatar"
        src={"/avatar/" + this.props.user.picture} />
      <span>{this.props.user.name}</span>
    </li>
    );
  }
}

export default SidebarChatItem;
