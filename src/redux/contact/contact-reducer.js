import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addFilterValue,
  createContactRequest,
  createContactSuccess,
  createContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contact-actions';

const contacts = createReducer([], {
  [createContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) => [
    ...state.filter(item => item.id !== Number(payload)),
  ],
});

const filter = createReducer('', {
  [addFilterValue]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [createContactRequest]: () => true,
  [createContactSuccess]: () => false,
  [createContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

export default combineReducers({
  contacts,
  filter,
  loading,
});
