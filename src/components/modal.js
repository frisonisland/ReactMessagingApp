import React, {Component} from 'react';
import { connect } from "react-redux";
import {IoMdCloseCircleOutline} from "react-icons/io";
class Modal extends Component {
  render(){
    return(
      <div>
      <div className={"modal" + (this.props.hidden ? " hidden":"")}>
      <div className="modal-header"><p>{this.props.title}</p>
      <button className="modal-close"
        onClick={this.props.toggleModal}><IoMdCloseCircleOutline/></button></div>
      <div className="modal-content">
        {this.props.content}
      </div>
      </div>
      <div className={"overlay" + (this.props.hidden ? " hidden":"")} onClick={this.props.toggleModal}></div>
      </div>
    )
  }
}

export default Modal;
