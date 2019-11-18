import {LOGIN} from '../constants/action-types';


function loginReducer(state, action) {
  if (action.type === LOGIN) {
    return Object.assign({}, state, {
      token: action.payload
    });
  }
  return state;
};

export default loginReducer;
