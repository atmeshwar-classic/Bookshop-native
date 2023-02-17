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
            const existingItem = state.cartItems.find(item => item.id === newItemId);

            if (existingItem) {
                
                existingItem.quantity++
                console.log("cartClick",existingItem);

            } else {
                state.cartItems.push(action.payload);
                console.log("cartClick",existingItem)
            }
        },


        removeItem(state, action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },


        incrementItem(state, action) {
            state.cartItems = state.cartItems.map(item => {
                if (item.id === action.payload) {
                    item.quantity++;
                }
                return item;
            });
        },


        decrementItem(state, action) {
            state.cartItems = state.cartItems.map(item => {
                if (item.id === action.payload) {
                    item.quantity--;
                }
                return item;
            }).filter(item => item.quantity !== 0);
        }

    }
});


export const { toggleCart, addItem, removeItem, incrementItem, decrementItem,totalCartLength } = cartSlice.actions;
export default cartSlice.reducer;
 export const cartSelector = (state) => state.cart;