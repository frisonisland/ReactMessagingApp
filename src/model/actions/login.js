import {LOGIN, BASE_API_PATH} from '../constants/action-types';

export function doLogin(username, password) {
  return {
    type: LOGIN,
    endpoint: BASE_API_PATH + "/login/",
    config: {
        method: 'POST',
        headers: {
            Accept: 'application/json',
                    'Content-Type': 'application/json',
        },
        body: JSON.stringify({username: username, password: password})
    }
  }
}
