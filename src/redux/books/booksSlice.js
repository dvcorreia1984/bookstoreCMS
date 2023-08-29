import { createSlice, nanoid } from '@reduxjs/toolkit';

const createBook = (title, author) => ({
  id: nanoid(),
  title,
  author,
});

const initialState = [
  createBook('The Hobbit', 'J.R.R. Tolkien'),
  createBook('The Lord of the Rings', 'J.R.R. Tolkien'),
  createBook('The Silmarillion', 'J.R.R. Tolkien'),
];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
