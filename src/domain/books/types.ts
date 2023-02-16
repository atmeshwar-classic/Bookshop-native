import { DefaultLoadingState } from "../../types/types";

export type Book = {
  id: string;
  name: string;
  author: string;
  description: string;
  price: String;
}

export type BooksState = DefaultLoadingState & {
  books: Book[];
}  

 