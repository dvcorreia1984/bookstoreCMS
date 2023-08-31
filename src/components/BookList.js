import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Form from './Form';
import { getBooks } from '../redux/books/booksSlice';

const BookList = () => {
  const dispatch = useDispatch();
  const booksObject = useSelector((state) => state.books.data);
  const status = useSelector((state) => state.books.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getBooks());
    }
  }, [status, dispatch]);

  const booksArray = Object.values(booksObject).reduce(
    (acc, currentValue) => acc.concat(currentValue), [],
  );

  if (status === 'loading') {
    return (
      <div>
        <h2>Book List</h2>
        <div>Loading...</div>
      </div>
    );
  }
  return (
    <div>
      <h2>Book List</h2>
      {booksArray.map((book) => (
        <Book key={book.item_id} book={book} />
      ))}
      <Form />
    </div>
  );
};

export default BookList;
