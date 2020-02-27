import contactsReducer from './contacts';
import messagesReducer from './messages';
import loginReducer from './login';
import chatsReducer from './chats';
import userReducer from './user';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const initialState = {
  contacts: [],
  messages: [],
  chats: [],
  user: "",
  token: cookies.get('Token')
};

function rootReducer(state = initialState, action) {
  console.log(action);
  state = loginReducer(state, action);
  state = contactsReducer(state, action);
  state = messagesReducer(state, action);
  state = chatsReducer(state, action);
  state = userReducer(state, action);
  return state;
}

export default rootReducer;
