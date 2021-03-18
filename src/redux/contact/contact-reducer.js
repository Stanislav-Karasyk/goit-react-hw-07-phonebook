import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { createContact, addFilterValue, deleteContact } from './contact-actions';

const contacts = createReducer([], {
  [createContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) => [
    ...state.filter(item => item.id !== payload),
  ],
});

const filter = createReducer('', {
  [addFilterValue]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
