import React from 'react';
import Form from './Form';
import BookList from './BookList';

const Book = ({ book }) => {
  const handleRemoveBook = () => {
    console.log(book);
    removeBook(book.id);
  };

  return (
    <div className="bg-white m-10">
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <button 
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleRemoveBook}>
        Remove
      </button>
    </div>
  );
};

export default Book;
