import { nanoid } from 'nanoid';

import { ADD_CONTACT, DELETE_CONTACT } from './constants';

export const addContact = ({ name, number }) => {
  return {
    type: ADD_CONTACT,
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const deleteContact = id => {
  return {
    type: DELETE_CONTACT,
    payload: id,
  };
};
