import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth';

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
