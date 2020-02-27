import {GET_CURRENT_USER, BASE_API_PATH} from '../constants/action-types';


export function getCurrentUser() {
  return {
    type: GET_CURRENT_USER,
    endpoint: BASE_API_PATH + "/user",
    config: {method: "GET"}
  };
}
