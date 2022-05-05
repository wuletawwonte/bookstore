import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { id, title, author } = props;
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(removeBook(id));
  };

  return (
    <li key={id}>
      <p>{title}</p>
      <p>{author}</p>
      <button type="button" onClick={deleteHandler}>Remove</button>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
