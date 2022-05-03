import { combineReducers } from 'react-redux';
import books from './books/books';
import categories from './categories/categories';

const root = combineReducers({ books, categories });

export default root;
