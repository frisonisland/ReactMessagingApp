import contactsReducer from './contacts';
import messagesReducer from './messages';
import loginReducer from './login';
import chatsReducer from './chats';

const initialState = {
  contacts: [],
  messages: [],
  chats: [],
  token: ""
};

function rootReducer(state = initialState, action) {
  state = loginReducer(state, action);
  state = contactsReducer(state, action);
  state = messagesReducer(state, action);
  state = chatsReducer(state, action);
  return state;
}

export default rootReducer;
