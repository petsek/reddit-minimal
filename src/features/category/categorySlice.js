import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchCategory = createAsyncThunk('category/fetchCategory', async () => {
  const response = await fetch("https://www.reddit.com/subreddits.json");
  const json = await response.json();
  const data =  json.data.children.map(category => category.data)
  return data
})



export const categorySlice = createSlice ({
  name: 'category',
  initialState: {
    categories: [],
    isLoading: false,
    hasError: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchCategory.fulfilled, (state,action) => {
        state.isLoading = false;
        state.hasError = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategory.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
        state.categories = 'Failed to load subreddits'
      })
  }
})

export const selectCategory = (state) => state.category.categories;
export const selectCategoryLoading = (state) => state.category.isLoading;

export default categorySlice.reducer