import {configureStore} from '@reduxjs/toolkit';
import MyBooksReducer from './MyBooksSlice';
import MyCartReducer from './MyCartSlice';

export const MyStore = configureStore({
  reducer: {
    allBooks: MyBooksReducer,
    Cart: MyCartReducer,
  },
});
