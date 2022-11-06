import { createSlice} from "@reduxjs/toolkit";

export const searchSlice = createSlice ({
  name: 'search',
  initialState: {
    searchTerm: ''
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    }
  }
})

export const selectSearch = (state) => state.search.searchTerm;

export const {setSearchTerm} = searchSlice.actions

export default searchSlice.reducer