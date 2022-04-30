import React from 'react';
import Book from './Book';

const BookList = () => {
  const books = [
    {
      id: 1,
      name: 'The Pursuits of Happiness',
      category: 'Politics',
      author: 'Anna Frank',
    },
    {
      id: 2,
      name: 'The Lord of the Rings',
      category: 'Biography',
      author: 'Ben Hur',
    },
    {
      id: 3,
      name: 'Alice in Wonderland',
      category: 'History',
      author: 'CS Lewis',
    },
  ];
  return (
    <div>
      <ul className="books-list">
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            name={book.name}
            author={book.author}
          />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
