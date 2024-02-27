import {createSlice} from '@reduxjs/toolkit';
import {BookmarkType} from '../../api/Type';
import {getBookmarkData} from '../../storage/Storage';

export type BookmarkStateType = {
  bookmarkList: BookmarkType[];
  isLoading: boolean;
};
const initState: BookmarkStateType = {
  bookmarkList: [],
  isLoading: false,
};

export const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState: initState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getBookmarkData.fulfilled, (state, action) => {
      state.isLoading = true;
      state.bookmarkList = action.payload;
    });
  },
});

export default bookmarkSlice.reducer;
