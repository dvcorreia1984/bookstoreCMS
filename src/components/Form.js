import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice'; // Import the action creator

const Form = () => {
  const dispatch = useDispatch(); // Initialize useDispatch

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const author = e.target.author.value;

    if (!title || !author) {
      return;
    }

    const newBook = { item_id: uuidv4(), title, author };
    dispatch(addBook(newBook)); // Dispatch the addBook action with the new book

    e.target.title.value = '';
    e.target.author.value = '';
  };

  return (
    <div>
      <h3>Add new Book</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="author" placeholder="author" />
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
