import {BACKEND_IP, ADD_CONTACT, GET_CONTACTS} from '../constants/action-types';

export function addContact(payload) {
  return {type: ADD_CONTACT, payload};
}

export function getContacts() {
  return function(dispatch) {
    return fetch("/contacts")
    .then(response => response.json())
    .then(json => {
      dispatch({ type: GET_CONTACTS, payload: json });
    });
  }
}
