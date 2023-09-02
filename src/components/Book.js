// Book.js

import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types'; // Import PropTypes
import { removeBook } from '../redux/books/booksSlice';
import 'fontsource-roboto-slab';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(book.id));
  };

  return (
    <div className="mx-10 my-2 rounded border border-gray-200">
      <li>
        <div className="flex flex-wrap">
          <div className="w-1/2">
            <div className="font-montserrat w-12 h-4 text-sm font-bold not-italic p-5 text-gray-500  ">
              {book.category}
            </div>
            <div className="font-roboto-slab w-48 h-8 text-3xl font-bold not-italic mx-5">
              {book.title}
            </div>
            <div className="font-roboto w-24 h-5 text-sm font-light not-italic text-bs-sec mx-5">
              {book.author}
            </div>
            <div className="flex gap-5 buttons">
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
          </div>
          <div className="flex w-1/4 bg-gray-300 p-4">
            <div>image</div>
            <div>64%</div>
            <div>Completed</div>
          </div>
          <div className="w-1/4 bg-gray-400 p-4">
            <div>CURRENT CHAPTER</div>
            <div>Chapter 17</div>
            <button
              type="button"
            >
              UPDATE PROGRESS
            </button>
          </div>
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
