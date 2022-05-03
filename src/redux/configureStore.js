import books from './books/books';
import categories from './categories/categories';
import { combineReducers } from 'react-redux';

export default root = combineReducers( { books, categories } );