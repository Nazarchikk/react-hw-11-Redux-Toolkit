import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://64ea157dbf99bdcc8e674953.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get("/Contacts");
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
});
export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (contact , thunkAPI) => {
      try {
        const response = await axios.post("/Contacts", {name:contact.name,number:contact.number});
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  
  export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
      try {
        const response = await axios.delete(`/Contacts/${contactId}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );