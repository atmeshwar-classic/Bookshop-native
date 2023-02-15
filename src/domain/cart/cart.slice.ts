import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { delay } from "@reduxjs/toolkit/dist/utils";
import type { RootState } from "../../store";
import { CartBook, CartBooksState } from "./types";

const initialState: CartBooksState = {
  loading: 'not loaded',
  cart_books: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add To Cart

    cartAddRequest(state, action){
      state.loading = 'not loaded'
    },
    cartAddSuccess(state, action){
      console.log(state.cart_books, " Cart Books ")
      state.loading = 'loaded',
      state.cart_books = [...state.cart_books, action.payload]

    },
    cartAddFailure(state, action){
      state.loading = 'not loaded'
    },

    // Remove from cart

    cartRemoveRequest(state, action){
      state.loading = 'not loaded'
    },
    cartRemoveSuccess(state, action){
      state.loading = 'loaded',
      state.cart_books = state.cart_books.filter(function(book){
        if(book.id != action.payload.id){
          return book;
        }
      })
    },
    cartRemoveFailure(state, action){
      state.loading = 'not loaded'
    },
  }, 
})


export const cartAddAction = (data) => {

  // console.log(data, "Show Me")
  return dispatch => {
    dispatch(cartListActions.cartAddRequest());
    dispatch(cartListActions.cartAddSuccess(data));
    dispatch(cartListActions.cartAddFailure());
  }
}

export const cartRemoveAction = (data) => {
  return dispatch => {
    dispatch(cartListActions.cartRemoveRequest());
    dispatch(cartListActions.cartRemoveSuccess(id));
    dispatch(cartListActions.cartRemoveFailure());
  }
}


export const cartSliceReducer = cartSlice.reducer;
export const cartListActions = cartSlice.actions;
export const cartSelector = (state: RootState) => state.cart_books;
