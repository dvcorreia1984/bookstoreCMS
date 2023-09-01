import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from './Form';
import { getBooks, removeBook } from '../redux/books/booksSlice';

const BookList = () => {
  const booksData = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const handleRemoveBook = (id) => {
    dispatch(removeBook({ item_id: id }));
  };

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {booksData.map((book) => (
          <div key={book.item_id}>
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
                onClick={() => handleRemoveBook(book.item_id)}
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
