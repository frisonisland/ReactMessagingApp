import contactsReducer from './contacts';

const initialState = {
  contacts: [{name:"Test"}]
};

function rootReducer(state = initialState, action) {
  state = contactsReducer(state, action);
  return state;
}

export default rootReducer;
