import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { booksSliceReducer } from "./domain/books/books.slice";
import cartReducer from "./domain/books/cartSlice"

const combinedReducer = combineReducers({
  books: booksSliceReducer,
  cart: cartReducer
})

export const store = configureStore({ reducer: combinedReducer });
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;