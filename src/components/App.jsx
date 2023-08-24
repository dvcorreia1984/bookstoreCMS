import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Categories from './Categories';
import BookList from './BookList';
import Form from './Form';
import '../index.css';

function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
      <Form />
    </>
  );
}

export default App;
