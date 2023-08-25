import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, removeBook }) => {
  const handleRemoveBook = () => {
    removeBook(book.id);
  };

  return (
    <div className="bg-white m-10">
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleRemoveBook}
      >
        Remove
      </button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
