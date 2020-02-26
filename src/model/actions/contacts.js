import {BACKEND_IP, BASE_API_PATH, ADD_CONTACT, GET_CONTACTS} from '../constants/action-types';

export function addContact(payload) {
  return {type: ADD_CONTACT, payload};
}

export function getContacts() {
  return {
    type: GET_CONTACTS,
    endpoint: BASE_API_PATH + "/contacts",
    config: {method: "GET"}
  }
}
