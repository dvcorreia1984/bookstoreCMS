import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleRemoveBook = (bookId) => {
    dispatch(removeBook(bookId));
  };

  const bookItems = books.map((bookItem) => (
    <div key={bookItem.item_id}>
      <li>
        {bookItem.item_id}
        {' '}
        -
        {' '}
        {bookItem.title}
        {' '}
        by
        {' '}
        {bookItem.author}
        {' '}
        (
        {bookItem.category}
        )
      </li>
      <div>
        <button
          type="button"
          onClick={() => handleRemoveBook(bookItem.item_id)}
        >
          Remove
        </button>
      </div>
    </div>
  ));

  return (
    <div>
      <ul>{bookItems}</ul>
    </div>
  );
};

export default Book;
