import initialState from './initialState';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/FsmSXjrNKGR3sQq9YSmL/books';

// Action types
const ADD_BOOK = 'bookstore/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/REMOVE_BOOK';
const GET_BOOKS_SUCCESS = 'bookstore/GET_BOOKS_SUCCESS';
const GET_BOOKS_FAILURE = 'bookstore/GET_BOOKS_FAILURE';
const GET_BOOKS_LOADING = 'bookstore/GET_BOOKS_LOADING';

// Action creators
export const addBook = (book) => ({ type: ADD_BOOK, payload: book });
export const removeBook = (id) => ({ type: REMOVE_BOOK, payload: id });
export const getBooksSuccess = (books) => ({ type: GET_BOOKS_SUCCESS, payload: books });
export const getBooksFailure = (errMessage) => ({ type: GET_BOOKS_FAILURE, payload: errMessage });
export const getBooksLoading = () => ({ type: GET_BOOKS_LOADING });

export const getBooks = () => (dispatch) => {
  dispatch(getBooksLoading());
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const formattedBooks = [];
      Object.keys(data).forEach((key) => {
        if (key) {
          formattedBooks.push({ ...data[key][0], item_id: key });
        }
      });
      dispatch(getBooksSuccess(formattedBooks));
    })
    .catch((err) => {
      dispatch(getBooksFailure(err.message));
    });
};

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
        books: action.payload,
      };
    case GET_BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_BOOK:
      return {
        status: '',
        books: [...state.books, {
          id: state.books.length + 1,
          title: action.payload.title,
          author: action.payload.author,
        }],
      };
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default books;
