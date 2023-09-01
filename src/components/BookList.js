// BookList.js
/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from './Form';
import { getBooks, removeBook } from '../redux/books/booksSlice'; // Import the removeBook action

const BookList = () => {
  const booksData = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const handleRemoveBook = (book_id) => {
    dispatch(removeBook({ item_id: book_id }));
  };

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {Object.keys(booksData).map((key) => (
          <div key={key}>
            <li>
              {booksData[key][0].item_id}
              {' '}
              -
              {' '}
              {booksData[key][0].title}
              {' '}
              by
              {' '}
              {booksData[key][0].author}
              {' '}
              (
              {booksData[key][0].category}
              )
            </li>
            <div>
              <button
                type="button"
                onClick={() => handleRemoveBook(key)}
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
