import React from 'react';
import BooksList from '../components/BooksList';
import RegisterBook from '../components/RegisterBook';

const BooksPage = () => (
  <>
    <h2>Books page</h2>
    <BooksList />
    <RegisterBook />
  </>
);

export default BooksPage;
