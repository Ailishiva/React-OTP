// reducers.js

import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT } from './actions';

const initialState = {
  contacts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, { ...action.payload, id: new Date().getTime() }],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== action.payload),
      };
    case EDIT_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) => {
          if (contact.id === action.payload.id) {
            return { ...contact, ...action.payload.updatedContact };
          }
          return contact;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
