import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Form from './Form';
import { getBooks } from '../redux/books/booksSlice';

const BookList = () => {
  const dispatch = useDispatch();
  const booksObject = useSelector((state) => state.books.data); // Get the books object

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const booksArray = Object.values(booksObject).reduce(
    (acc, currentValue) => acc.concat(currentValue), [],
  );

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
