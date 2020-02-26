import { LOGIN } from '../constants/action-types'
import Cookies from 'universal-cookie';

export default function() {
  return function(next) {
    return function(callApi) {
        console.log(next);
        console.log(callApi);
      // Check if this action is a redux-api-middleware action.
      // Pass the FSA to the next action.
      const cookies = new Cookies();
      callApi.config.headers = Object.assign({}, callApi.config.headers, {
         Token: cookies.get('Token') || '',
       });
      let request = new Request(callApi.endpoint, callApi.config);
      return fetch(request).then(response => response.json())
      .then(json => {
        next({ type: callApi.type, payload: json });
      });
      }
    }
}
