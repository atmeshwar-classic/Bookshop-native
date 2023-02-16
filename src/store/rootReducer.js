import {combineReducers} from 'redux';
import booksDetail from './booksDetail/reducer';

const rootReducer = combineReducers({
  books: booksDetail,
});

export default rootReducer;
