import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Form from './Form';
import { getBooks } from '../redux/books/booksSlice'; // Adjust the import path

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.data);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div>
      <h2>Book List</h2>
      {books.map((book) => (
        <Book key={book.item_id} book={book} />
      ))}
      <Form />
    </div>
  );
};

export default BookList;
