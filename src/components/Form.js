// Form.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !author) {
      return;
    }

    const newBook = {
      id: uuidv4(),
      title,
      author,
      category: 'Fiction',
    };

    dispatch(addBook(newBook));

    setTitle('');
    setAuthor('');
  };

  return (
    <div
      className="border-t-2 m-10"
    >
      <h3
        id="newbook"
        className="my-7"
      >
        ADD NEW BOOK
      </h3>
      <form
        className="flex flex-row content-evenly gap-4"
        onSubmit={handleSubmit}
      >
        <input
          className="flex-grow border-2 border-gray-300 rounded-lg p-2 focus:border-gray-500"
          type="text"
          name="title"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="border-2 border-gray-300 rounded-lg p-2 focus:border-gray-500"
          type="text"
          name="author"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button
          type="submit"
          className="bg-bs-azure hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default Form;
