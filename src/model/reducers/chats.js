import {ADD_CONTACT, GET_CHATS} from '../constants/action-types';


function chatsReducer(state, action) {
  if (action.type === GET_CHATS) {
    return Object.assign({}, state, {
      chats: state.chats.concat(action.payload)
    });
  }
  return state;
};

export default chatsReducer;
