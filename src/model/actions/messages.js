import {GET_MESSAGES, SEND_MESSAGE, BASE_API_PATH} from '../constants/action-types';


export function getMessages(userId) {
  return function(dispatch) {
    return fetch(BASE_API_PATH + "/messages/".concat(userId))
    .then(response => response.json())
    .then(json => {
      dispatch({ type: GET_MESSAGES, payload: json.messages });
    });
  }
}

export function sendMessage(userId, message) {
  return function(dispatch) {
    return fetch(BASE_API_PATH + "/messages/".concat(userId) + "/",
      {
        method: 'POST',
        headers: {
            Accept: 'application/json',
                    'Content-Type': 'application/json',
        },
    body: JSON.stringify({message: message})
    })
    .then(response => response.json())
    .then(json => {
      dispatch({ type: SEND_MESSAGE, payload: json.messages });
    });
  }
}
