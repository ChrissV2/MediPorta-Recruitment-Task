import { configureStore } from '@reduxjs/toolkit';
import tagsReducer from './tagsReducer'; // Assuming you have your reducer defined

const store = configureStore({
  reducer: {
    tags: tagsReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>; // Define RootState type

export default store;
