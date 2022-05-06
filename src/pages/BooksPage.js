import React from 'react';
import BooksList from '../components/BooksList';
import RegisterBook from '../components/RegisterBook';

const BooksPage = () => (
  <div className="page-body">
    <h2>Books page</h2>
    <BooksList />
    <RegisterBook />
  </div>
);

export default BooksPage;
