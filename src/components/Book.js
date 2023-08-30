import React from 'react';
import { useSelector } from 'react-redux';

const Book = () => {
  const book = useSelector((state) => state.books);

  const books = book.map((book) => (
    <li key={book.id}>
      {book.title}
      {' '}
      by
      {' '}
      {book.category}
    </li>
  ));

  return (
    <div>
      <ul>{books}</ul>
    </div>
  );
};

export default Book;
