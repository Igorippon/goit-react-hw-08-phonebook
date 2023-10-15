import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from '../contacts/operations';

const handlePending = state => {
    state.isLoading = true;
};
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};
const slice = createSlice({
    name: 'contacts',
    initialState: {
        list:
            [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.list = action.payload;
        },
        [fetchContacts.rejected]: handleRejected,
        [addContact.pending]: handlePending,
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.list.push(action.payload);
        },
        [addContact.rejected]: handleRejected,
        [deleteContact.pending]: handlePending,
        [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.list.findIndex(
                contact => contact.id === action.payload.id
            );
            state.list.splice(index, 1);
        },
        [deleteContact.rejected]: handleRejected,
    },

});

export const contactsReducer = slice.reducer;

