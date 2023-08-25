import React from 'react';

const Book = ({ book }) => {
  const handleRemoveBook = () => {
    console.log('remove book');
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
