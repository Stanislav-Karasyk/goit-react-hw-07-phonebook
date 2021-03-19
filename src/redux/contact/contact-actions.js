import { createAction } from '@reduxjs/toolkit';

const createContactRequest = createAction('contacts/createContactRequest');
const createContactSuccess = createAction('contacts/createContactSuccess');
const createContactError = createAction('contacts/createContactError');

const deleteContactRequest = createAction('contacts/deleteContactRequest');
const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
const deleteContactError = createAction('contacts/deleteContactError');

const addFilterValue = createAction('contact/addFilterValue');

export {
  addFilterValue,
  createContactRequest,
  createContactSuccess,
  createContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
};
