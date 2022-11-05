import { configureStore } from '@reduxjs/toolkit';
import categorySlice from '../features/category/categorySlice';
import postReducer from '../features/post/postSlice'

export const store = configureStore({
  reducer: {
    post: postReducer,
    category: categorySlice
  }
});
