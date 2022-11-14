import { configureStore } from '@reduxjs/toolkit';
import cocktailsReducer from './features/cocktailSlice';

// export const store = configureStore({
//   reducer: {
//     cocktails: cocktailsReducer,
//   },
// });

export default configureStore({
  reducer: {
    app: cocktailsReducer,
  },
});
