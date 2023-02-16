import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { booksSliceReducer } from "./domain/books/books.slice";
import addBookToStoreReducer from "./domain/books/books.slice";

const combinedReducer = combineReducers({
  books: booksSliceReducer,
  allBooks:addBookToStoreReducer
})

export const store = configureStore({ reducer: combinedReducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;