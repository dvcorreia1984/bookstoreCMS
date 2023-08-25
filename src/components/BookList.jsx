import React, { useState } from 'react';
import Book from './Book';
import Form from './Form';

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
