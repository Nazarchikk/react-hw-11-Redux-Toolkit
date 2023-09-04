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
      const filtersByName = state.contacts.filter(contact => contact.name.name.toLowerCase().includes(action.payload))
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

  // reducers: {
  //   addContacts: {
  //     reducer(state, action) {
  //       const existingName = state.filterdContacts.some(
  //         contact => contact.name === action.payload.name
  //       );
  //       const existingNumber = state.filterdContacts.some(
  //         contact => contact.number === action.payload.number
  //       );
  //       if (existingName || existingNumber) {
  //         Notify.failure('Contact already exists');
  //       } else {
  //         state.contacts.unshift(action.payload);
  //         state.filterdContacts.unshift(action.payload);
  //       }

  //     },
  //     prepare(name,number) {
  //       return {
  //         payload: {
  //           name,
  //           number,
  //           id: nanoid(),
  //         },
  //       };
  //     },
  //   },
  //   deleteContacts(state, action) {
  //     const index = state.contacts.findIndex(contact => contact.id === action.payload);
  //     const index1 = state.filterdContacts.findIndex(contact => contact.id === action.payload);
  //     state.contacts.splice(index, 1);
  //     state.filterdContacts.splice(index1, 1);
  //   },
  //   filterContacts(state, action) {
  //     const filtersByName = state.filterdContacts.filter(contact => contact.name.toLowerCase().includes(action.payload))
  //     if (action.payload.length > 0) {
  //       state.filterdContacts = filtersByName;
  //     } else {
  //       state.filterdContacts = [...state.contacts];
  //     }
  //   },
  // },

export const { filterContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

