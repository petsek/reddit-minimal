import { configureStore } from '@reduxjs/toolkit';
import categorySlice from '../features/category/categorySlice';
import postReducer from '../features/post/postSlice';
import searchSlice from '../features/search/searchSlice';

export const store = configureStore({
  reducer: {
    post: postReducer,
    category: categorySlice,
    search: searchSlice
  }
});
