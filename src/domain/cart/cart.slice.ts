import {createSlice} from '@reduxjs/toolkit';
import type {RootState} from '../../store';

const initialState: any = {
  loading: 'not loaded',
  cart: [],
};

const cartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    addBookToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    removeFromCart: (state, action) => {
      state.cart = [...action.payload];
    },
  },
});

export const cartSliceReducer = cartSlice.reducer;
export const {addBookToCart, removeFromCart} = cartSlice.actions;
export const cartSelector = (state: RootState) => state.cart;
