import {NEW_MESSAGE, GET_MESSAGES} from '../constants/action-types';


function messagesReducer(state, action) {
  if (action.type === NEW_MESSAGE) {
    return Object.assign({}, state, {
      messages: state.messages.concat(action.payload)
    });
  }
  if (action.type === GET_MESSAGES) {
    return Object.assign({}, state, {
      messages: action.payload
    });
  }
  return state;
};

export default messagesReducer;
