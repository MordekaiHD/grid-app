import { configureStore } from '@reduxjs/toolkit';
import gridReducer from '../features/gridSlice';

export const store = configureStore({
  reducer: {
    grid: gridReducer,
  },
});