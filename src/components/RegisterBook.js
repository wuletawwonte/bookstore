import React from 'react';

const RegisterBook = () => {
  const registerBook = (e) => {
    e.preventDefault();
    console.log('form submit clicked');
  };

  return (
    <>
      <h2>Register Book</h2>
      <form className="register-book-form" onSubmit={registerBook}>
        <input type="text" name="title" placeholder="Title" required />
        <input type="text" name="author" placeholder="Author" required />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegisterBook;
