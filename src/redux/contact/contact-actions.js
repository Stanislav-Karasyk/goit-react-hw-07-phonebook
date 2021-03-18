import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const createContact = createAction(
  'contact/createContact',
  ({ name, number }) => {
    return {
      payload: {
        name,
        id: uuidv4(),
        number,
      },
    };
  },
);

const addFilterValue = createAction('contact/addFilterValue');

const deleteContact = createAction('contact/deleteContact');

export { createContact, addFilterValue, deleteContact };
