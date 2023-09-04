import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://64ea157dbf99bdcc8e674953.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get("/contact");
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
});
export const addContact = createAsyncThunk(
    "contacts/addContacts",
    async (name , number , thunkAPI) => {
      try {
        const response = await axios.post("/contact", {name:name,phone:number});
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  
  export const deleteContact = createAsyncThunk(
    "contacts/deleteContacts",
    async (contactId, thunkAPI) => {
      try {
        const response = await axios.delete(`/contact/${contactId}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );