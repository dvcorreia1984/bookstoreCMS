import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  constructionStatus: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    constructionStatus: (state) => {
      state.constructionStatus = 'Under construction';
    },
  },
});

export const { constructionStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
