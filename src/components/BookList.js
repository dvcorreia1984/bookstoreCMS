// BookList.js

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from './Form';
import { getBooks, removeBook } from '../redux/books/booksSlice';

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const HandleRemoveBook = async (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <div key={book.id}>
            <li>
              {book.title}
              {' '}
              by
              {' '}
              {book.author}
              {' '}
              (
              {book.category}
              )
            </li>
            <div>
              <button
                type="button"
                onClick={() => HandleRemoveBook(book.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </ul>
      <Form />
    </div>
  );
};

export default BookList;
