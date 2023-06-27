import { configureStore } from '@reduxjs/toolkit';
import {moviesApi} from "@/store/services/moviesApi";
import cartReducer from './features/cartSlice';
import filterSlice from './features/filterSlice';

export const store = configureStore({
  reducer: {
      cart: cartReducer,
      filters: filterSlice,
      [moviesApi.reducerPath]: moviesApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({}).concat([moviesApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
