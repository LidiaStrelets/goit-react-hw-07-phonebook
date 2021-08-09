import { createReducer, createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './contacts-actions';
import { addContactOperation, fetchContacts, removeContactOperation } from './contacts-operations';

const entities = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,

  [addContactOperation.fulfilled]: (state, action) => [...state, action.payload],

  [removeContactOperation.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,

  [addContactOperation.pending]: () => true,
  [addContactOperation.fulfilled]: () => false,
  [addContactOperation.rejected]: () => false,

  [removeContactOperation.pending]: () => true,
  [removeContactOperation.fulfilled]: () => false,
  [removeContactOperation.rejected]: () => false,
});
const error = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [fetchContacts.pending]: () => null,

  [addContactOperation.rejected]: (_, { payload }) => payload,
  [addContactOperation.pending]: () => null,

  [removeContactOperation.rejected]: (_, { payload }) => payload,
  [removeContactOperation.pending]: () => null,
});

const itemsReducer = combineReducers({
  entities,
  isLoading,
  error,
});

const filterReducer = createReducer('', {
  [actions.setUpFilter]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
export default contactsReducer;
