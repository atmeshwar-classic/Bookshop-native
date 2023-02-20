import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

const initialState = {
    isCartOpen: false,
    cartItems: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        toggleCart(state, action) {
            state.isCartOpen = action.payload;
        },

        addItem(state, action) {
            const newItemId = action.payload.id;
            const existingItem = state.cartItems.find((item:any) => item.id === newItemId);

            if (!existingItem) {  
                state.cartItems.push(action.payload);
            }
        },

        removeItem(state, action) {
            state.cartItems = state.cartItems.filter((item:any) => item.id !== action.payload);
        },

        addAmount(state, action) {
            state.cartItems = state.cartItems.filter((item:any) => item.id !== action.payload);
        },

    }
});


export const { toggleCart, addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
export const cartSelector = (state:RootState) => state.cart;