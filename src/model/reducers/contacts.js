import {ADD_CONTACT, GET_CONTACTS} from '../constants/action-types';


function contactsReducer(state, action) {
  if (action.type === ADD_CONTACT) {
    return Object.assign({}, state, {
      contacts: state.contacts.concat(action.payload)
    });
  }
  if (action.type === GET_CONTACTS) {
    //console.log("Got contacts");
    //console.log(action.payload);
    return Object.assign({}, state, {
      contacts: state.contacts.concat(action.payload.address_book)
    });
  }
  return state;
};

export default contactsReducer;
