import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { booksSliceReducer } from "./domain/books/books.slice";

const combinedReducer = combineReducers({
  books: booksSliceReducer
})

const store = configureStore({ reducer: combinedReducer, devTools: true });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;