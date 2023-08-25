import React, { useState } from 'react';
import Book from './Book';
import Form from './Form';

const BookList = () => {
  const [bookList, setBookList] = useState([
    {
      id: '1',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      id: '2',
      title: 'Harry Potter and the Order of the Phoenix',
      author: 'J.K. Rowling',
    },
    {
      id: '3',
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
    },
  ]);

  const addBook = (newBook) => {
    setBookList([...bookList, newBook]);
  };

  const removeBook = (id) => {
    setBookList(bookList.filter((book) => book.id !== id));
  };

  return (
    <div>
      <div className="p-5 m-5">
        {bookList.map((book) => (
          <Book key={book.id} book={book} removeBook={removeBook} />
        ))}
      </div>
      <div className="p-5 m-5">
        <Form addBook={addBook} />
      </div>
    </div>
  );
};

export default BookList;
