import React from 'react';

const RegisterBook = () => (
  <>
    <h2>Register Book</h2>
    <form className="register-book-form">
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="author" placeholder="Author" />
      <button type="submit">Register</button>
    </form>
  </>
);

export default RegisterBook;
