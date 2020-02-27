import {GET_CURRENT_USER} from '../constants/action-types';

function userReducer(state, action) {
  if (action.type === GET_CURRENT_USER) {
    console.log(state);
    return Object.assign({}, state, {
      user: action.payload.user
    });
  }
  return state;
}

export default userReducer;
