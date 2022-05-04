import { combineReducers, createStore } from 'redux';
import books from './books/books';
import categories from './categories/categories';

const rootReducer = combineReducers({ books, categories });
const store = createStore(rootReducer);

export default store;
