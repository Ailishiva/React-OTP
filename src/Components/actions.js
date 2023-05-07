// // actions.js

// export const addContact = (contact) => {
//     return {
//       type: "ADD_CONTACT",
//       payload: contact,
//     };
//   };
  
//   export const editContact = (contact) => {
//     return {
//       type: "EDIT_CONTACT",
//       payload: contact,
//     };
//   };
  
//   export const deleteContact = (contactId) => {
//     return {
//       type: "DELETE_CONTACT",
//       payload: contactId,
//     };
//   };
  
// actions.js

// Action types
// actions.js

// Action types
export const ADD_CONTACT = 'ADD_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const EDIT_CONTACT = 'EDIT_CONTACT';

// Action creators
export const addContact = (contact) => {
  return {
    type: ADD_CONTACT,
    payload: contact,
  };
};

export const deleteContact = (id) => {
  return {
    type: DELETE_CONTACT,
    payload: id,
  };
};

export const editContact = (id, updatedContact) => {
  return {
    type: EDIT_CONTACT,
    payload: { id, updatedContact },
  };
};
