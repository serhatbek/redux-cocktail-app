import { configureStore } from '@reduxjs/toolkit';
import cocktailsReducer from './features/cocktailSlice';

export const store = configureStore({
  reducer: {
    cocktails: cocktailsReducer,
  },
});
