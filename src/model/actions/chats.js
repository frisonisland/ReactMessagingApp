import {GET_CHATS, BASE_API_PATH} from '../constants/action-types';

export function getChats() {
  return function(dispatch) {
    return fetch(BASE_API_PATH + "/chats/")
    .then(response => response.json())
    .then(json => {
      dispatch({ type: GET_CHATS, payload: json.chats });
    });
  }
}
