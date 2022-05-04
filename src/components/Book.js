import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { id, title, author } = props;
  return (
    <li key={id}>
      <p>{title}</p>
      <p>{author}</p>
      <button type="button">Remove</button>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
