import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const ApiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/qAXnPjBsIe5FsS7Ji9ZL/books';

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
    console.log('Transformed Books:', transformedBooks);
    return transformedBooks;
  },
);

export const addBook = createAsyncThunk(
  'books/addBook', async (book) => {
    const response = await axios.post(ApiUrl, book);
    return response.data;
  },
);

export const removeBook = createAsyncThunk(
  'books/removeBook', async (id) => {
    const response = await axios.delete(`${ApiUrl}/${id}`);
    return response.data;
  },
);

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
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        const { itemId } = action.payload;
        return state.filter((book) => book.item_id !== itemId);
      });
  },
});

export default booksSlice.reducer;
