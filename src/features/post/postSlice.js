import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchPost = createAsyncThunk('posts/fetchPost', async () => {
  const response = await fetch('https://www.reddit.com/r/all.json')
  const json = await response.json();
  const data =  json.data.children.map(post => post.data)
  return data
})

export const fetchSubReddit = createAsyncThunk ('posts/fetchSubReddit', async (subreddit) => {
  const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`)
  const json = await response.json();
  const data = json.data.children.map(post => post.data);
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
    filterOnSearch: (state, action) => {
      state.posts = state.posts.filter((post) => {
        return post.title.toLowerCase().includes(action.payload.toLowerCase())
      })
    }
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
      .addCase(fetchSubReddit.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchSubReddit.fulfilled, (state,action) => {
        state.isLoading = false;
        state.hasError = false;
        state.posts = action.payload;
      })
      .addCase(fetchSubReddit.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
  }
})

export const selectPost = (state) => state.post.posts;
export const selectIsLoading = (state) => state.post.isLoading
export const selectHasError = (state) => state.post.hasError

export const {filterOnSearch} = postSlice.actions

export default postSlice.reducer