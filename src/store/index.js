import { configureStore } from '@reduxjs/toolkit';
import logger from './middlewares/logger';
import { apiSlice } from './slices/apiSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(apiSlice.middleware).concat(logger),
});

export default store;
