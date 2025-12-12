import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // Array of products { id, title, price, quantity, ... }
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Add or Increment an item
        addToCart: (state, action) => {
            const product = action.payload;
            const existingItem = state.items.find(item => item.id === product.id);

            if(existingItem) {
                // If product already exists, increment quantity
                existingItem.quantity += 1;
            }
            else {
                // If new product, add it with quantity = 1
                state.items.push({ ...product, quantity: 1 });
            }
        },

        // Remove item entirely from cart
        removeFromCart: (state, action) => {
            // payload is the product ID
            const idToRemove = action.payload;
            state.items = state.items.filter(item => item.id !== idToRemove);
        },

        // Increment quantity
        incrementQuanity: (state, action) => {
            const idToIncrement = action.payload;
            const item = state.items.find(item => item.id === idToIncrement);
            if(item) {
                item.quantity += 1;
            }
        },

        // Decrement quantity (Quantity must not go below 1)
        decrementQuantity: (state, action) => {
            const idToDecrement = action.payload;
            const item = state.items.find(item => item.id === idToDecrement);

            // If quantity is 1, we do nothing
            if(item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },

        // Clear the cart (used after checkout)
        clearCart: (state) => {
            state.items = [];
        },
    },
});

// Export actions for components to dispatch
export const {
    addToCart,
    removeFromCart,
    incrementQuanity,
    decrementQuantity,
    clearCart,
} = cartSlice.actions;

// Export the reducer for the store configuration
export default cartSlice.reducer;