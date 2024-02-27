import {configureStore} from '@reduxjs/toolkit';
import {FoodApi} from '../api/FoodApi';
import bookmarkReducer from '../screens/bookmark/bookmarkReducer';
export const store = configureStore({
  reducer: {
    [FoodApi.reducerPath]: FoodApi.reducer,
    bookmark: bookmarkReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(FoodApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
