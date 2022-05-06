import React from 'react';
import BooksList from '../components/BooksList';
import RegisterBook from '../components/RegisterBook';

const BooksPage = () => (
  <div className="page-body">
    <BooksList />
    <RegisterBook />
  </div>
);

export default BooksPage;
