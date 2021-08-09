import { createSelector } from '@reduxjs/toolkit';

const getItems = state => state.contacts.items.entities;
const getFilter = state => state.contacts.filter;

const getFilteredContacts = createSelector([getItems, getFilter], (items, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return items.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
});

const contactsSelectors = {
  getItems,
  getFilter,
  getFilteredContacts,
};

export default contactsSelectors;
