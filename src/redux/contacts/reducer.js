import { LS_KEY, ADD_CONTACT, DELETE_CONTACT } from './constants';

let initContacts = null;
const savedContacts = localStorage.getItem(LS_KEY);
if (savedContacts !== null) {
  initContacts = JSON.parse(savedContacts);
}

const initialState = initContacts === null ? [] : initContacts;

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];
    case DELETE_CONTACT:
      return state.filter(({ id }) => id !== action.payload);
    default:
      return state;
  }
};

export default contactReducer;
