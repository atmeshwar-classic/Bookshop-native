import { DefaultLoadingState } from "../../types/types";

export type CartBook = {
  id: string;
  name: string;
  author: string;
  description: string;
  price: number;
}

export type CartBooksState = DefaultLoadingState & {
  cart_books: CartBook[];
}