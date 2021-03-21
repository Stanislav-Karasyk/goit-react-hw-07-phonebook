import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contact.contacts;

const getFilter = state => state.contact.filter;

const getLoadind = state => state.contact.loading;

const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    ),
);

export { getFilter, getLoadind, getFilteredContacts };
