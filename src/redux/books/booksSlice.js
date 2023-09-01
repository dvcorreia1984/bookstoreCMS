import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const bookstoreApi = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
export const API = 'qAXnPjBsIe5FsS7Ji9ZL';

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  try {
    const response = await axios.get(`${bookstoreApi}${API}/books`);
    const transformedBooks = Object.keys(response.data).map((key) => {
      const bookData = response.data[key][0];
      return {
        item_id: key,
        title: bookData.title,
        author: bookData.author,
        category: bookData.category,
      };
    });
    console.log('Transformed Books:', transformedBooks);
    return transformedBooks;
  } catch (error) {
    console.error('API Error:', error);
    throw error; // Rethrow the error for proper handling
  }
});

export const addBook = createAsyncThunk(
  'books/addBook',
  async (book) => {
    const response = await axios.post(
      `${bookstoreApi}${API}/books`,
      book,
    );
    return response.data;
  },
);

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (book) => {
    try {
      const response = await axios.delete(`${bookstoreApi}${API}/books/${book.item_id}`);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
);

export const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.fulfilled, (state, action) => action.payload)
      .addCase(removeBook.fulfilled, (state, action) => {
        const { itemId } = action.payload;
        return state.filter((book) => book.item_id !== itemId);
      });
  },
});

export default booksSlice.reducer;
