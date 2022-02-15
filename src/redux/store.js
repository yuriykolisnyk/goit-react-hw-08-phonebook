import { configureStore } from '@reduxjs/toolkit';
import phonebookReducer from './contacts/contacts-reducer';
import { contactsApi } from './contacts/contacts-slice';

export const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), contactsApi.middleware],
});
