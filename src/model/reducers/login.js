import {LOGIN} from '../constants/action-types';
import Cookies from 'universal-cookie';

function loginReducer(state, action) {
  if (action.type === LOGIN) {
    let token = action.payload.token;
    if (token){
      //set token cookie
      const cookies = new Cookies();
      cookies.set('Token', token, { path: '/' });
    }
    return Object.assign({}, state, {
      token: token,
      error: (token ? "":"error")
    });
  }
  return state;
};

export default loginReducer;
