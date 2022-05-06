import React from 'react';
import BooksList from '../components/BooksList';
import RegisterBook from '../components/RegisterBook';

const BooksPage = () => {
  const hrStyle = {
    marginTop: '2rem',
    marginBottom: '1.8rem',
    border: 'solid 1px var(--grey-border)',
  };

  return (
    <div className="page-body">
      <BooksList />
      <hr style={hrStyle} />
      <RegisterBook />
    </div>
  );
};

export default BooksPage;
