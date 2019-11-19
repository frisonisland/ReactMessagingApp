import contactsReducer from './contacts';
import messagesReducer from './messages';
import loginReducer from './login';

const initialState = {
  contacts: [],
  messages: []
};

function rootReducer(state = initialState, action) {
  state = loginReducer(state, action);
  state = contactsReducer(state, action);
  state = messagesReducer(state, action);
  return state;
}

export default rootReducer;
