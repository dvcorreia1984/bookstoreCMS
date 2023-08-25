import React, { useState } from 'react';
import Book from './Book';
import Form from './Form';

const BookList = () => {
  const [bookList, setBookList] = useState([]);

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
      <Form addBook={addBook} />
    </div>
  );
};

export default BookList;
