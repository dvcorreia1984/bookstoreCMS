import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice'; // Import the reducer

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default store;
