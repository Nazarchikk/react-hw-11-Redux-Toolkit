import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./operations";
import { addContact,deleteContact } from "./operations";
const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  }, reducers: {
    filterContacts(state, action) {
      const filtersByName = state.contacts.filter(contact => contact.name.toLowerCase().includes(action.payload.toLowerCase()))
      if (action.payload.length > 0) {
        state.filterdContacts = filtersByName;
      } else {
        state.filterdContacts = [...state.contacts];
      }
    },
  },
  extraReducers: {
    [fetchContacts.pending](state, action) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.contacts.findIndex(
        task => task.id === action.payload.id
      );
      state.contacts.splice(index, 1);
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { filterContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

