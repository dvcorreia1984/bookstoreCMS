import React from 'react';
import { useSelector } from 'react-redux';

const BookList = () => {
  const books = useSelector((state) => state.books);

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>Title:</strong>
            {' '}
            {book.title}
            {' '}
            |
            {' '}
            <strong>Author:</strong>
            {' '}
            {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
