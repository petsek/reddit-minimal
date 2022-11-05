import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchPost = createAsyncThunk('posts/fetchPost', async () => {
  const response = await fetch('https://www.reddit.com/r/all.json')
  const json = await response.json();
  const data =  json.data.children.map(post => post.data)
  return data
})



export const postSlice = createSlice ({
  name: 'post',
  initialState: {
    posts: [],
    isLoading: false,
    hasError: false
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPost.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchPost.fulfilled, (state,action) => {
        state.isLoading = false;
        state.hasError = false;
        state.posts = action.payload;
      })
      .addCase(fetchPost.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
  }
})

export const selectPost = (state) => state.post.posts;

export default postSlice.reducer