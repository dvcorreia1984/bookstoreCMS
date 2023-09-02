// BookList.js

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from './Form';
import { getBooks } from '../redux/books/booksSlice';
import Book from './Book'; // Import the Book component

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  const status = useSelector((state) => state.books.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getBooks());
    }
  }, [status, dispatch]);

  return (
    <div id="test" className="bg-bs-pale-grey">
      <ul
        className="mb-10"
      >
        {books.map((book) => (
          <div key={book.id}>
            <Book book={book} />
          </div>
        ))}
      </ul>
      <Form />
      <div
        className="m-10 bg-gray-100"
      />
    </div>
  );
};

export default BookList;
