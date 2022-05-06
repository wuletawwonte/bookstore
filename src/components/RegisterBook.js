import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { registerNewBook } from '../redux/books/books';

const RegisterBook = () => {
  const dispatch = useDispatch();

  const registerBook = (e) => {
    e.preventDefault();
    const { title, author, category } = e.target.elements;
    const newBook = {
      item_id: uuidv4(),
      title: title.value,
      author: author.value,
      category: category.value,
    };

    dispatch(registerNewBook(newBook));
    title.value = '';
    author.value = '';
    category.value = '';
  };

  return (
    <>
      <h2>Register Book</h2>
      <form className="register-book-form" onSubmit={registerBook}>
        <input type="text" id="title" placeholder="Title" required />
        <input type="text" id="author" placeholder="Author" required />
        <input type="text" id="category" placeholder="Category" required />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegisterBook;
