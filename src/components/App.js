import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Author from './Author';
import BookList from './BookList';
import '../index.css';

function App() {
  return (
    <BrowserRouter>
      <div
        id="root"
        className="bg-bs-main-bg h-screen w-90"
      >
        <Nav />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/categories" element={<Author />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
