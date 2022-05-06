import initialState from './initialState';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/FsmSXjrNKGR3sQq9YSmL/books';

// Action types
const ADD_BOOK = 'bookstore/ADD_BOOK';
const GET_BOOKS_SUCCESS = 'bookstore/GET_BOOKS_SUCCESS';
const GET_BOOKS_FAILURE = 'bookstore/GET_BOOKS_FAILURE';
const GET_BOOKS_LOADING = 'bookstore/GET_BOOKS_LOADING';

// Action creators
export const getBooksSuccess = (books) => ({ type: GET_BOOKS_SUCCESS, payload: books });
export const getBooksFailure = (errMessage) => ({ type: GET_BOOKS_FAILURE, payload: errMessage });
export const getBooksLoading = () => ({ type: GET_BOOKS_LOADING });
export const addBook = (book) => ({ type: ADD_BOOK, payload: book });

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

export const removeBook = (id) => (dispatch) => {
  fetch(`${url}/${id}`, {
    method: 'DELETE',
  })
    .then(() => {
      dispatch(getBooks());
    });
};

export const registerNewBook = (newBook) => (dispatch) => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBook),
  })
    .then(() => {
      dispatch(addBook(newBook));
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
        ...state,
        loading: false,
        books: [...state.books, action.payload],
      };
    default:
      return state;
  }
};

export default books;
