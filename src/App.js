import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BooksPage from './pages/BooksPage';
import CategoriesPage from './pages/CategoriesPage';
import NoMatch from './pages/NoMatch';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<BooksPage /> } />
        <Route path="/categories" element={<CategoriesPage /> } />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
