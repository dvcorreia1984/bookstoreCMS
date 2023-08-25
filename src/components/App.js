import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Author from './Author';
import BookList from './BookList';
import '../index.css';

function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/categories" element={<Author />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
