import React, { useState } from 'react';
import Book from './Book';
import Form from './Form';

const initialBooklist = [
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    title: 'Harry Potter and the Order of the Phoenix',
    author: 'J.K. Rowling',
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
  },
];

const BookList = () => {
  const [bookList, setBookList] = useState([]);

  const addBook = (newBook) => {
    setBookList([...bookList, newBook]);
  };

  return (
    <div>
      <div className="p-5 m-5">
        {bookList.map((book, index) => (
          <Book key={index} book={book} />
        ))}
      </div>
      <Form addBook={addBook} />
    </div>
  );
};

export default BookList;
