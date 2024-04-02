// store.ts

import { configureStore } from '@reduxjs/toolkit';
import tagsReducer from './tagsReducer'; // Assuming you have your reducer defined

const store = configureStore({
  reducer: {
    tags: tagsReducer,
    // Add more reducers here if you have them
  }
});

export type RootState = ReturnType<typeof store.getState>; // Define RootState type

export default store;
