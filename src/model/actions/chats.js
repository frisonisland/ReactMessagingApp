import {GET_CHATS, POST_CHAT, BASE_API_PATH} from '../constants/action-types';

export function getChats() {
  return function(dispatch) {
    return fetch(BASE_API_PATH + "/chats/")
    .then(response => response.json())
    .then(json => {
      dispatch({ type: GET_CHATS, payload: json.chats });
    });
  }
}

export function postChat(name, userId) {
  return function(dispatch) {
    return fetch(BASE_API_PATH + "/chats/",{
        method: 'POST',
        headers: {
            Accept: 'application/json',
                    'Content-Type': 'application/json',
        },
        body: JSON.stringify({name: name, userId: userId})
    })
    .then(response => response.json())
    .then(json => {
      dispatch({ type: POST_CHAT, payload: json.chats });
    });
  }
}
