/* eslint-disable no-console */
// bookSlice.js
/* eslint-disable camelcase */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const bookstoreApi = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

export const API = 'qAXnPjBsIe5FsS7Ji9ZL';

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async () => {
    try {
      const response = await axios.get(
        `${bookstoreApi}${API}/books`,
      );
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
);

export const addBook = createAsyncThunk(
  'books/addBook',
  async (book) => {
    const response = await axios.post(
      `${bookstoreApi}${API}/books`, book,
    );
    return response.data;
  },
);

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (book) => {
    try {
      console.log('Before DELETE request');
      const response = await axios.delete(`${bookstoreApi}${API}/books/${book.item_id}`);
      console.log('After DELETE request');
      return response.data;
    } catch (error) {
      console.error('Error removing book:', error);
      throw error;
    }
  },
);

export const booksSlice = createSlice({
  name: 'books',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.fulfilled, (state, action) => {
        const books = action.payload;
        return books;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        const { item_id } = action.payload;
        const newState = { ...state };
        delete newState[item_id];
        return newState;
      });
  },
});

export default booksSlice.reducer;
