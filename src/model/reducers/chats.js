import {ADD_CONTACT, GET_CHATS, POST_CHAT} from '../constants/action-types';


function chatsReducer(state, action) {
  if (action.type === GET_CHATS || action.type === POST_CHAT) {
    return Object.assign({}, state, {
      chats: state.chats.concat(action.payload.chats)
    });
  }
  return state;
};

export default chatsReducer;
