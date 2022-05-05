import initialState from './initialState';

// Action types
const ADD_BOOK = 'bookstore/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/REMOVE_BOOK';
const GET_BOOKS_SUCCESS = 'bookstore/GET_BOOKS_SUCCESS';
const GET_BOOKS_FAILURE = 'bookstore/GET_BOOKS_FAILURE';
const GET_BOOKS_LOADING = 'bookstore/GET_BOOKS_LOADING';

// Action creators
export const addBook = (book) => ({ type: ADD_BOOK, payload: book });
export const removeBook = (id) => ({ type: REMOVE_BOOK, payload: id });
export const getBooksSuccess = (books) => ({type: GET_BOOKS_SUCCESS, payload: books });
export const getBooksFailure = () => ({type: GET_BOOKS_FAILURE });
export const getBooksLoading = () => ({type: GET_BOOKS_LOADING });
  

// Reducer
const books = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        books: action.payload
      };
    case GET_BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };
    case ADD_BOOK:
      return {status: '', books: [...state.books, {
        id: state.books.length + 1,
        title: action.payload.title,
        author: action.payload.author,
      }]};
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default books;
