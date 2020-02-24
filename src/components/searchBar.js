import React, { Component } from 'react';
import {IoIosSearch} from 'react-icons/io';
import "./searchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
      this.state = {
        search: true,
        text: ''
      }
  }

  render() {
    return (
      <div className="searchBar">
        <input placeholder="Search" type="text" className="searchText"/>
      </div>
    );
  }
}

export default SearchBar;
