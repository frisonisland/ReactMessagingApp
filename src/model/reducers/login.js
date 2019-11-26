import {LOGIN} from '../constants/action-types';


function loginReducer(state, action) {
  if (action.type === LOGIN) {
    console.log(action);
    return Object.assign({}, state, {
      token: action.payload.token,
      error: (action.payload.token ? "":"error")
    });
  }
  return state;
};

export default loginReducer;
