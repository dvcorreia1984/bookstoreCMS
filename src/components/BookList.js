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
        {Object.keys(booksData).map((key) => (
          <div key={key}>
            <li>
              {booksData[key].title}
              {' '}
              by
              {' '}
              {booksData[key].author}
              {' '}
              (
              {booksData[key].category}
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
