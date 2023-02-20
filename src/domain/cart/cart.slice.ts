import {createSlice} from '@reduxjs/toolkit';
import type {RootState} from '../../store';
import {cartState} from './types';
import {Book} from '../books/types';

const initialState: cartState = {
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
      let item = action.payload;
      let filteredCart = state.cart.filter((i: Book) => i.id !== item.id);
      state.cart = [...filteredCart];
    },
  },
});

export const cartSliceReducer = cartSlice.reducer;
export const {addBookToCart, removeFromCart} = cartSlice.actions;
export const cartSelector = (state: RootState) => state.cart;
