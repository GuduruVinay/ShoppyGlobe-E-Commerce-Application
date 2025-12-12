import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchTerm: '',
    },
    reducers: {
        setSearchTerm: (state, action) => {
            // payload is the string the user typed
            state.searchTerm = action.payload;
        },
    },
});

export const { setSearchTerm } = searchSlice.actions;

export default searchSlice.reducer;