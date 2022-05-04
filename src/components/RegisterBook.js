import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const RegisterBook = () => {
  const dispatch = useDispatch();

  const registerBook = (e) => {
    e.preventDefault();
    const { title, author } = e.target.elements;
    const newBook = {
      title: title.value,
      author: author.value,
    };

    dispatch(addBook(newBook));
  };

  return (
    <>
      <h2>Register Book</h2>
      <form className="register-book-form" onSubmit={registerBook}>
        <input type="text" id="title" placeholder="Title" required />
        <input type="text" id="author" placeholder="Author" required />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegisterBook;
