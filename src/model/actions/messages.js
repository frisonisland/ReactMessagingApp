import {NEW_MESSAGE, GET_MESSAGES} from '../constants/action-types';

export function newMessage(payload) {
  return {type: ADD_CONTACT, payload};
}

export function getMessages(userId) {
  return function(dispatch) {
    return fetch("/contacts/".concat(userId))
    .then(response => response.json())
    .then(json => {
      dispatch({ type: GET_MESSAGES, payload: json });
    });
  }
}
