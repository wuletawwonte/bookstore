import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/books/books';
import Book from './Book';

const BookList = () => {
  const { books, loading } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  let content = null;
  if (loading) {
    content = <h2>Loading...</h2>;
  } else {
    content = books.map((book) => (
      <Book
        key={book.item_id}
        id={book.item_id}
        title={book.title}
        author={book.author}
        category={book.category}
      />
    ));
  }

  return (
    <div>
      <ul className="books-list">
        {content}
      </ul>
    </div>
  );
};

export default BookList;
