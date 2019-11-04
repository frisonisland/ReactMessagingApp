import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import store from "./model/store/index";
import { getContacts } from "./model/actions/contacts";

window.store = store;
window.getContacts = getContacts;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
