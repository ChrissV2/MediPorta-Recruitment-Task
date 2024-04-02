// tagsReducer.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TagState, Tag } from './types';

const initialState: TagState = {
  tags: [],
  loading: false,
  error: null
};

const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    fetchTagsRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchTagsSuccess(state, action: PayloadAction<Tag[]>) {
      state.loading = false;
      state.tags = action.payload;
    },
    fetchTagsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const { fetchTagsRequest, fetchTagsSuccess, fetchTagsFailure } = tagsSlice.actions;
export default tagsSlice.reducer;
