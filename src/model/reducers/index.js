import contactsReducer from './contacts';
import messagesReducer from './messages';

const initialState = {
  contacts: [{userId:"gahgahjgahjgaj", name:"Test", picture:"bot.jpg", status: true, info: "I'm a bot, bzkjkhk."}],
  messages: []
};

function rootReducer(state = initialState, action) {
  state = contactsReducer(state, action);
  state = messagesReducer(state, action);
  return state;
}

export default rootReducer;
