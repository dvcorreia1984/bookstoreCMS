// booksSlice.js

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const ApiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/vXJpk0d2bxZwuZAgl8ey/books';

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

export const getBooks = createAsyncThunk(
  'books/getBooks', async () => {
    const response = await axios.get(`${ApiUrl}`);
    const transformedBooks = Object.keys(response.data).map((id) => {
      const bookData = response.data[id][0];
      return {
        item_id: id,
        title: bookData.title,
        author: bookData.author,
        category: bookData.category,
      };
    });
    return transformedBooks;
  },
);

export const addBook = createAsyncThunk(
  'books/addBook',
  async (book) => {
    const response = await axios.post(ApiUrl, {
      item_id: book.id,
      title: book.title,
      author: book.author,
      category: book.category,
    });
    return response.data;
  },
);

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  const response = await axios.delete(`${ApiUrl}/${id}`);
  return response.data;
});

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.status = action.type;
        state.books = action.payload;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        const book = action.meta.arg;
        state.books.push(book);
        state.status = action.type;
      })
      .addCase(addBook.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        const index = state.books.findIndex((book) => book.id === action.payload);
        state.books.splice(index, 1);
        state.books = [...state.books];
      });
  },
});

export default booksSlice.reducer;
