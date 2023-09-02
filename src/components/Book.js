// Book.js

import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types'; // Import PropTypes
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(book.id));
  };

  return (
    <div className="bg-white m-10">
      <li>
        <div className="font-montserrat w-12 h-4 text-sm font-bold not-italic p-5 text-gray-500  ">
          {book.category}
        </div>
        <div className="font-mono w-48 h-8 text-3xl font-bold not-italic mx-5">
          {book.title}
        </div>
        <div className="w-24 h-5 text-sm font-light not-italic text-blue-600 mx-5">
          {book.author}
        </div>
        <div className="flex gap-5 buttons p-5">
          <button
            type="button"
          >
            Comments
          </button>
          <button
            type="button"
            onClick={handleRemoveBook}
          >
            Remove
          </button>
          <button
            type="button"
          >
            Edit
          </button>
        </div>
      </li>
    </div>
  );
};

// Add PropTypes validation
Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
