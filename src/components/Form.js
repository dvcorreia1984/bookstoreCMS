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
      category: 'fiction',
    };

    dispatch(addBook(newBook));

    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <h3>Add new Book</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="author"
          placeholder="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default Form;
