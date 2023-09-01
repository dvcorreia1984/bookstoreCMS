import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from './Form';
import { getBooks } from '../redux/books/booksSlice';
import Book from './Book'; // Import the Book component

const BookList = () => {
  const booksData = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {Object.keys(booksData).map((key) => (
          <Book key={key} book={booksData[key][0]} />
        ))}
      </ul>
      <Form />
    </div>
  );
};

export default BookList;
