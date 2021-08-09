import { getContacts, addContact, removeContact } from '../../services/contacts-api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      return await getContacts();
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addContactOperation = createAsyncThunk('contacts/addContact', async data => {
  await addContact(data);
  return data;
});

export const removeContactOperation = createAsyncThunk(
  'contacts/removeContact',
  async idToRemove => {
    await removeContact(idToRemove);
    return idToRemove;
  },
);
