import React, { Component } from 'react';
import {IoIosSearch} from 'react-icons/io';

class SidebarChatItem extends Component {

  render() {
    return (
      <div className="sidebarChatItem">
        {{props.name}}
      </div>
    );
  }
}

export default SidebarChatItem;
