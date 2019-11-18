import {LOGIN} from '../constants/action-types';

export function doLogin(username, password) {
  return function(dispatch) {
    return fetch("/login")
    .then(response => response.json())
    .then(json => {
      dispatch({ type: LOGIN, payload: json });
    });
  }
}
