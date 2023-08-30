import React from 'react';
import { useSelector } from 'react-redux';

const Book = () => {
  const books = useSelector((state) => state.books);

  const bookItems = books.map((bookItems) => (
    <>
      <li key={bookItems.item_id}>
        {bookItems.item_id}
        {bookItems.title}
        {bookItems.author}
        {bookItems.category}
      </li>
      <div>
        <button type="button">Remove</button>
      </div>

    </>
  ));

  return (
    <div>
      <ul>{bookItems}</ul>
    </div>
  );
};

export default Book;
