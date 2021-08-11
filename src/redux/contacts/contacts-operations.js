import { getContacts, addContact, removeContact } from '../../services/contacts-api';
// import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  fetchContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
  removeContactsError,
  removeContactsRequest,
  removeContactsSuccess,
} from './contacts-actions';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const data = await getContacts();
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchContacts',
//   async (_, { rejectWithValue }) => {
//     try {
//       return await getContacts();
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   },
// );

export const addContactOperation = data => async dispatch => {
  dispatch(addContactRequest());

  try {
    await addContact(data);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

// export const addContactOperation = createAsyncThunk('contacts/addContact', async data => {
//   await addContact(data);
//   return data;
// });

export const removeContactOperation = idToRemove => async dispatch => {
  dispatch(removeContactsRequest());

  try {
    await removeContact(idToRemove);
    dispatch(removeContactsSuccess(idToRemove));
  } catch (error) {
    dispatch(removeContactsError(error));
  }
};

// export const removeContactOperation = createAsyncThunk(
//   'contacts/removeContact',
//   async idToRemove => {
//     await removeContact(idToRemove);
//     return idToRemove;
//   },
// );
