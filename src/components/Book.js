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
    <div>
      <li>
        {book.title}
        {' '}
        by
        {' '}
        {book.author}
        {' '}
        (
        {book.category}
        )
      </li>
      <div>
        <button type="button" onClick={handleRemoveBook}>
          Remove
        </button>
      </div>
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
