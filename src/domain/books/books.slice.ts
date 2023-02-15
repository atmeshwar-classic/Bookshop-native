import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { delay } from "@reduxjs/toolkit/dist/utils";
import type { RootState } from "../../store";
import { books } from "./books";
import { Book, BooksState } from "./types";

export const getBooks = createAsyncThunk<Book[]>('books/get', async () => {
  // Since we do not have an api call we are simulating one.
  // await delay(3000);
  // setTimeout()
  return books;
})

const initialState: BooksState = {
  loading: 'not loaded',
  books: [],
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    clearBooksState: () => initialState,
    bookAddToCartRequest(state, action){
        state.loading = 'not loaded'
    },
    bookAddToCartSuccess(state, action){
        state.loading = 'loaded',
        state.books = state.books.filter(function(book) {
          if(book.id != action.payload.id){
            return book;
          }
        })
    },
    bookAddToCartFailure(state, action){
        state.loading = 'not loaded'
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state, action) => {
        state.loading = 'loading';
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.loading = 'loaded';
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.loading = 'error';
        state.error = (action.payload as string) ?? action.error.message;
      })
  }
});

export const booksAddToCardAction = (id) => {

  return async dispatch => {
    dispatch(booksListActions.bookAddToCartRequest());
    dispatch(booksListActions.bookAddToCartSuccess({id: id}));
    dispatch(booksListActions.bookAddToCartFailure());
  }

}

export const booksSliceReducer = booksSlice.reducer;
export const { clearBooksState } = booksSlice.actions;

const booksListActions = booksSlice.actions;
export const booksSelector = (state: RootState) => state.books;