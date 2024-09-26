import { nanoid } from "nanoid";
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "contacts",
  initialState: { items: [] },
  reducers: {
    addContact: (state, action) => {
      state.items.push({
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    deleteContact: (state, action) => {
      return {
        ...state,
        items: state.items.filter((task) => task.id !== action.payload),
      };
    },
  },
});

export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;

export const selectContacts = (state) => state.contacts.items;
