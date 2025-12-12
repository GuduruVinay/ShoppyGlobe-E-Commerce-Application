import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import searchReducer from './searchSlice';

export const store = configureStore({
    reducer: {
        // Cart slice
        cart: cartReducer,
        // Search slice
        search: searchReducer,
    },
});