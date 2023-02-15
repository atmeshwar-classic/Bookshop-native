import { FETCH_PRODUCTS } from './types';
import { getProducts } from "./books.slice";

export const fetchProducts = () => dispatch => {
	const books = getProducts();
     dispatch({
        type: FETCH_PRODUCTS,
        payload: books
    })
}