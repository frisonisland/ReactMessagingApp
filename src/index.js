import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import store from "./model/store/index";
import { getContacts } from "./model/actions/contacts";
import { getMessages } from "./model/actions/messages";
import { getChats } from "./model/actions/chats";
import { getCurrentUser } from "./model/actions/user";

window.store = store;
window.getContacts = getContacts;
window.getMessages = getMessages;
window.getChats = getChats;
window.getCurrentUser = getCurrentUser;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
