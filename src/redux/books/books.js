// Action types
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// Action creators
const addBook = (title) => ({ type: ADD_BOOK, payload: { title },});
const removeBook = (id) => ({ type: REMOVE_BOOK, payload: { id },});
