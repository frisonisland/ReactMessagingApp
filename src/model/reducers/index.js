import contactsReducer from './contacts';

const initialState = {
  contacts: [{name:"Test", picture:"bot.jpg", status: true, info: "I'm a bot, bzkjkhk."}]
};

function rootReducer(state = initialState, action) {
  state = contactsReducer(state, action);
  return state;
}

export default rootReducer;
