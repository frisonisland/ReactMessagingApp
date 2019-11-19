import {LOGIN, BASE_API_PATH} from '../constants/action-types';

export function doLogin(username, password) {
  return function(dispatch) {
    return fetch(BASE_API_PATH + "/login/",{
        method: 'POST',
        headers: {
            Accept: 'application/json',
                    'Content-Type': 'application/json',
        },
        body: JSON.stringify({username: username, password: password})
    })
    .then(response => response.json())
    .then(json => {
      dispatch({ type: LOGIN, payload: json });
    });
  }
}
