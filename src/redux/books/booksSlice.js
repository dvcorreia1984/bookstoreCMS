// booksSlice.js

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const bookstoreApi = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

export const API = 'WBEsAZeVXOpBOImz94an';

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
    const response = await axios.delete(
      `${bookstoreApi}${API}/books/${book.id}`,
    );
    return response.data;
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
      });
  },
});

export default booksSlice.reducer;
