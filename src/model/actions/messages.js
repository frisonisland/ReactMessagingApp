import {NEW_MESSAGE, GET_MESSAGES, BASE_API_PATH} from '../constants/action-types';

export function newMessage(payload) {
  return {type: NEW_MESSAGE, payload};
}

export function getMessages(userId) {
  return function(dispatch) {
    return fetch(BASE_API_PATH + "/messages/".concat(userId))
    .then(response => response.json())
    .then(json => {
      dispatch({ type: GET_MESSAGES, payload: json.messages });
    });
  }
}
